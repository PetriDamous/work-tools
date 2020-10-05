// Custome settings for cousrse lessons
function customSettings () {            

    if(cpInfoCurrentSlideLabel === "Intro Video") {
        cp.show("SmartShape_114");
        cp.show("Image_372");
        cp.show("Image_371");
        cp.show("Image_370");
        cp.show(getElement("Play", "id"));
        cp.hide(getElement("Pause", "id"));
        cpCmndPause = true;
    }
    if (cpInfoCurrentSlideLabel === "Pre-Test") {
        cp.hide(getElement("Play", "id"));
        cp.hide(getElement("Pause", "id"));
        disableMenu();              
    }
    
    if (cpInfoCurrentSlideLabel === "Pre-Test Results") {
        disableMenu();
    }   

}

function disableMenu () {
    var menuBtn = document.querySelectorAll('div[title="Menu"]');               
    for (var i = 0; i < menuBtn.length; i++) {                    
        var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");                    
        menuItemCanvas.style.opacity = ".5";
        menuBtn[i].style.cursor = "not-allowed";
    } 
}

function hideProgress () {    
    var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);

    isProgress = (slideLabel !== 'Learning Check' || slideAudioName) ? true : false;

}

function hideTimer () {
    var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);

    isTimer = (slideLabel !== 'Learning Check' || slideAudioName) ? true : false;

}