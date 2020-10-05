// Grabs element
function getElement (attribute, property) {
    return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
}

// When mute is on keeps audio muted on slide change
function stayMute () { 
    if(cpCmndMute == true){ 
        cpCmndMute = true; 
    } else { 
        cpCmndMute = false; 
    } 
}

// Hides and shows play and pause
function hidePlay () {           
    cp.hide(getElement("Play", "id"));
    cp.show(getElement("Pause", "id"));                
}

// Hides pause and shows play
function hidePause () {
    cp.show(getElement("Play", "id"));
    cp.hide(getElement("Pause", "id"));
}

// Hide mute shows unmute
function hideMute () {
    cp.show(getElement("Unmute", "id"));
    cp.hide(getElement("Mute", "id"));
}

// Hide unmute shows mute
function hideUnmute () {
    cp.show(getElement("Mute", "id"));
    cp.hide(getElement("Unmute", "id"));
}

// Rests UI controls when entering new slide
function slideRest() {
    cpCmndTOCVisible = false;
    hidePlay();
    stayMute();
}