///////////////// Menu/TOC Button Controls ////////////////

$(getElement("Menu", "obj")).click(function () {
    
    if (disableMenuAction()) return;
 
    if (cpCmndTOCVisible == false) {
        cpCmndTOCVisible = true;
    } else {
        cpCmndTOCVisible = false;
    }
           
});