function videoPlay () {
    // Custom play function for WQP
    // Place inside of play button
    if(cpInfoCurrentSlideLabel === "Intro Video") {
        cp.hide("SmartShape_114");
        cp.hide("Image_372");
        cp.hide("Image_371");
        cp.hide("Image_370");
    }
}


// Play        
$(getElement("Play", "obj")).click(function () {
 
    if (cpInfoCurrentFrame < (lastFrame - 1)) {              
        cpCmndResume = true;
        hidePlay();
        stayMute();                
    } else {
        cpCmndPause = true;
        hidePlay();                 
    }   
});