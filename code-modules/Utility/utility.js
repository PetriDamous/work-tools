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