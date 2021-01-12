function muteSound(){
		createjs.Sound.muted = true;
	}
function unmuteSound(){
		createjs.Sound.muted = false;
	}
if(parent.muteCounter != 1){
			parent.loadAudio();
	} 
	else{
		muteSound();
	}