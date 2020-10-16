// Pause        
$(getElement("Pause", "obj")).click(function () {
    if (cpInfoCurrentFrame < (lastFrame - 1)) {
        cpCmndPause = true;                
        hidePause();
    } else {
        cpCmndPause = true;
        hidePlay();                
    }
});