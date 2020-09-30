 $(document)
    .ready(function() {
        
        ///////////// Used to check for browser type ////////////////////////////////
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        var isChrome = navigator.webkitGetUserMedia;  


        /////////////////////// Tool tips, Elements, ID //////////////////////////////////////
        var toolTipArray = [             
            "Back",
            "Next",                    
            "Help",                   
            "Resources"
        ];


        toolTipArray.forEach(function(elm, idx) {          
            var setDataAttr;

            if (isIE) {                
                setDataAttr = $("p:contains(" + toolTipArray[idx] + ")" ).parent().parent();
                
            } else {
                setDataAttr = $('div[aria-label="' + toolTipArray[idx] + " " + '"]');
            }
            
            setDataAttr.attr("data-button", toolTipArray[idx]);
            setDataAttr.attr("title", toolTipArray[idx]);
            setDataAttr.css("cursor", "pointer");                      
            
        });

        var btnBack = document.getElementById('Btn_bck' + cpInfoCurrentSlide);        
        btnBack.title = 'Back';
        var backID = btnBack.id;

        var btnNext = document.getElementById('Btn_nxt' + cpInfoCurrentSlide);
        btnNext.title = 'Next';        
        var nextID = btnNext.id;

        //////////////////////////////////////////////
        //////////// Hides Back Button On 1st Slide
        /////////////////////////////////////////////

        if (cpInfoCurrentSlide === 1) {
            cp.hide(backID);
            cp.hide(getElement("Back", "id"));
        }


        // Grabs element
        function getElement (attribute, property) {
            return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
        }

    });