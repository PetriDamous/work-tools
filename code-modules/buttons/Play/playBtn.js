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