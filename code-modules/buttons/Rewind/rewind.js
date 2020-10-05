// Rewind        
$(getElement("Rewind", "obj")).click(function () {    
    var rewindTime = 90;
    
    if(cpInfoCurrentFrame != firstFrame && cpInfoCurrentFrame > (firstFrame + rewindTime)) {
        cpCmndGotoFrameAndResume = cpInfoCurrentFrame - rewindTime;
        hidePlay();
        stayMute();
        cpCmndTOCVisible = false;       
    }
    
    else{
        cpCmndGotoFrameAndResume = firstFrame;
        hidePlay();
        stayMute();
        cpCmndTOCVisible = false;        			
    }
});