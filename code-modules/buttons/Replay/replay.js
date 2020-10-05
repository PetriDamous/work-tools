// Replay button        
$(getElement("Replay", "obj")).click(function () {
    cpCmndGotoFrame = firstFrame;
    
    if (cpCmndPause) {
        setTimeout(function () {
            cpCmndResume = true;
        }, 300);
    }            
    
    
    if(cpCmndTOCVisible == true) {
        cpCmndTOCVisible = false;
        hidePlay();
        stayMute();
    } else { 
        hidePlay();
        stayMute(); 
    }
});