// CC button
$(getElement("Closed Caption", "obj")).click(function () {
    if (cpCmndCC === 0) {
        cpCmndCC = 1;
        cp.hide('ccClose');
        ccToolTip();
       
    } else {               
        cpCmndCC = 0;
        ccToolTip();
        
    }

});


$(getElement("Closed Caption", "obj")).click(function () {
    ccToolTip();
});

ccToolTip(); 

function ccToolTip () {
    if (cpCmndCC === 0) {                
        $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Open");         
    } else if (cpCmndCC === 1) {
        $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Close");        
    }
}