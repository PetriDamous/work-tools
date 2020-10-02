// Controls TOC height
var tocFooter = '585px';
var tocContent = '509px';
var toc = '605px';
    
// When mute is on keeps audio muted on slide change
function stayMute(){ 
    if(cpCmndMute == true){ 
        cpCmndMute = true; 
    }
    else{ cpCmndMute = false } 
}
// Hides and shows play and pause
function hidePlay(){
    // hide play            
    cp.hide(getElement("Play", "id"));
    // show pause
    cp.show(getElement("Pause", "id"));                
}
// Rests UI controls when entering new slide
function slideRest(){
    cpCmndTOCVisible = false;
    cp.show(getElement("Pause", "id"));
    cp.hide(getElement("Play", "id"));
    stayMute();
}        
 
slideRest();        
// Closes TOC and shows pause button when new slide is entered
cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", slideRest);
//////////////////////Nav bar control/////////////////////////////
customSettings();
// Pause        
$(getElement("Pause", "obj")).click(function(){
    if (cpInfoCurrentFrame < (lastFrame - 1)) {
        cpCmndPause = true;                
        cp.hide(getElement("Pause", "id"));
        cp.show(getElement("Play", "id"));
    } else {
        cpCmndPause = true;                
    }
});
// Play        
$(getElement("Play", "obj")).click(function(){
    if(cpInfoCurrentSlideLabel === "Intro Video") {
        cp.hide("SmartShape_114");
        cp.hide("Image_372");
        cp.hide("Image_371");
        cp.hide("Image_370");
    } 
    if (cpInfoCurrentFrame < (lastFrame - 1)) {              
        cpCmndResume = true;
        hidePlay();
        stayMute();                
    } else {
        cpCmndPause = true;
        hidePlay();                 
    }   
});
// Rewind        
$(getElement("Rewind", "obj")).click(function(){
    //////////////////////////////////// Controls the rewinding of a slide ///////////////////////////////            
    
    if(cpInfoCurrentFrame != firstFrame && cpInfoCurrentFrame > (firstFrame + rewindTime)){
        cpCmndGotoFrameAndResume = cpInfoCurrentFrame - rewindTime;
        hidePlay();
        stayMute();
        cpCmndTOCVisible = false;       
    	}
    
    else{
        cpCmndGotoFrameAndResume = firstFrame
        hidePlay();
        stayMute();
        cpCmndTOCVisible = false;        			
    	}
});
// Replay button        
$(getElement("Replay", "obj")).click(function(){
    // cpCmndGotoFrameAndResume = firstFrame;
    cpCmndGotoFrame = firstFrame;
    
    if (cpCmndPause) {
        setTimeout(function() {
            cpCmndResume = true;
        }, 300);
    }            
    
    
    if(cpCmndTOCVisible == true){
        // Hides TOC
        cpCmndTOCVisible = false;
        hidePlay();
        stayMute();
    }
    else{ 
        hidePlay();
        stayMute(); 
    }
});
// Mute              
$(getElement("Mute", "obj")).click(function(){
    cpCmndMute = true; 
    cp.hide(muteID);
    cp.show(unmuteID);       
});
// Unmute          
$(getElement("Unmute", "obj")).click(function(){
    cpCmndMute = false;            
    cp.hide(unmuteID);
    cp.show(muteID);       
});

// CC button
function ccToolTip(){
    if (cpCmndCC === 0) {                
        $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Open");         
       } else if (cpCmndCC == true) {
        $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Close");
    
        cp.hide('ccClose');
       }
}
$(getElement("Closed Caption", "obj")).click(function() {
    if (cpCmndCC === 0) {
        cpCmndCC = 1;
        ccToolTip();
       
    } else {               
        cpCmndCC = 0;
        ccToolTip();
        
    }

});
ccToolTip();        
///////////////// Menu/TOC Button Controls ////////////////         
   
// Menu Funcitons
// Controls TOC height
$('#tocFooter').css('top', tocFooter);
$('#tocContent').css('height', tocContent);
$('#toc').css('height', toc);

$(getElement("Menu", "obj")).click(function(){
    
    if(cpInfoCurrentSlideLabel === "Pre-Test" || cpInfoCurrentSlideLabel === "Pre-Test Results") {
        return;
    } else {
        if (cpCmndTOCVisible == false) {
            cpCmndTOCVisible = true;
        } else {
            cpCmndTOCVisible = false;
        }
    }           
});

// Grabs element
function getElement (attribute, property) {
    return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
}

