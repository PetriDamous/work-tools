///////////////// Menu/TOC Button Controls ////////////////         

// Controls TOC height
var tocFooter = '585px';
var tocContent = '509px';
var toc = '605px';

$('#tocFooter').css('top', tocFooter);
$('#tocContent').css('height', tocContent);
$('#toc').css('height', toc);

$(getElement("Menu", "obj")).click(function () {
    
    if (disableMenuAction()) return;
 
    if (cpCmndTOCVisible == false) {
        cpCmndTOCVisible = true;
    } else {
        cpCmndTOCVisible = false;
    }
           
});

function disableMenuAction () {

    return cpInfoCurrentSlideLabel.indexOf("Pre-Test") !== -1 ? true : false;

}

function disableMenuStyle () {
    var menuBtn = document.querySelectorAll('div[title="Menu"]');               
    for (var i = 0; i < menuBtn.length; i++) {                    
        var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");                    
        menuItemCanvas.style.opacity = ".5";
        menuBtn[i].style.cursor = "not-allowed";
    } 
}