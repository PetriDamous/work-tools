function hideProgress () {    
    var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);

    isProgress = (slideLabel !== 'Learning Check' || slideAudioName) ? true : false;

}

// Controls position of progress bar
var proPos = 'absolute';
var proTop = '87%';
var proLeft = '6%';
var proWidth = '1123px';
var proHeight = '5px';

// Progress Bar styles
function progressStyle() {
    if (isIE || isEdge) {
        
       var edgeIE = {
            ms_track: [
                '#seekerBar::-ms-track {',
                // Change styles below //
                
                'background: transparent;',
                'border-color: transparent;',
                'color: transparent;',
                // Change styles above //
                '}'
            ].join(''),
            ms_thumb: [
                '#seekerBar::-ms-thumb {',
                // Change styles below //
                'height: 0px;',
                'width: 0px;',                            
                // Change styles above //
                '}'
            ].join(''),
            ms_fill_lower: [
                '#seekerBar::-ms-fill-lower {',
                // Change styles below //
                'border: none;',
                'background: linear-gradient(to bottom, rgba(165,201,86,1) 38%,rgba(205,235,142,1) 76%);',                            
                // Change styles above // 
                '}'             
            ].join(''),
            ms_fill_upper: [
                '#seekerBar::-ms-fill-upper {',
                // Change styles below //
                                           
                // Change styles above //
                '}'                            
            ].join('')
       } 
        return edgeIE.ms_track + edgeIE.ms_thumb + edgeIE.ms_fill_lower;
    }
    if (isFirefox) {
        
        var fireFox = {
            moz_input: [
                '#seekerBar {',
                // Change styles below //
                'background-color: transparent;',
                
                // Change styles above //
                '}'
            ].join(''),
            moz_range_track: [
                '#seekerBar::-moz-range-track {',
                // Change styles below //
                'background-color: transparent;',
                'border: none;',
                // Change styles above //
                '}'
            ].join(''),
            moz_range_thumb: [
                '#seekerBar::-moz-range-thumb {',
                // Change styles below //
                'height: 0px;',
                'width: 0px;',
                'border: none;',
                // Change styles above //
                '}'
            ].join(''),
            moz_range_progress: [
                '#seekerBar::-moz-range-progress {',
                // Change styles below //
                'border: none;',
                'background: -moz-linear-gradient(-45deg, rgba(165,201,86,1) 22%, rgba(205,235,142,1) 91%);',
                // Change styles above //
                '}'
            ].join(''),
        }
        
        return fireFox.moz_input + fireFox.moz_range_track + fireFox.moz_range_thumb + fireFox.moz_range_progress;
    }
    if (isChrome) {
        
        var chrome = {
            inputRngI: [
                'input[type="range" i]  {',
                // Change styles below //
                '-webkit-appearance: none;',
                'color: transparent;',
                'cursor: default;',
                'padding: initial;',
                'border: none;',
                'margin: 2px;',
                
                // Change styles above //
                '}'
            ].join(''),
            
            inputRng: [
                'input[type="range"] {',
                // Change styles below //
                'overflow: hidden;',
                '-webkit-appearance: none;',
                'border: none;',
                // Change styles above //
                '}'
            ].join(''),
            runTrack: [
                'input[type="range"]::-webkit-slider-runnable-track {',
                // Change styles below //
                'height: 5px;',
                '-webkit-appearance: none;',
                'border: none;',
                // Change styles above //
                '}'
            ].join(''),
            slideThumb: [
                'input[type="range"]::-webkit-slider-thumb {',
                // Change styles below //
                'width: 0px;',
                '-webkit-appearance: none;',
                'box-shadow: -800px 0 0 800px #c0e07b;',
                // Change styles above //
                '}'
            ].join(''),
            inputFcs: [
                'input[type="range"]:focus {',
                // Change styles below //
                'outline: none;',
                // Change styles above //
                '}'
            ].join('')
        }

        return chrome.inputRngI + chrome.inputRng + chrome.runTrack + chrome.slideThumb + chrome.inputFcs
    }   
    
}

        ///////////////////// Setup and controls progress bar /////////////////////////////////////////////////////
        
        if (isProgress) {

            // Creates Progress Bar
            var playBar = document.createElement('input');            

            playBar.id = 'seekerBar';
            playBar.type = 'range';
            playBar.value = '0';
            playBar.step = '1';
            playBar.min = firstFrame;
            playBar.max = lastFrame;            
            
            
            // Places Progress Bar on slide
            $("#div_Slide").append(playBar);

            // Positions Progress Bar            
            $('#seekerBar').css({
                'position': proPos, 
                'top': proTop, 
                'left': proLeft,
                'width': proWidth,                
                'z-index': 3000,
                'height': proHeight                
            });

            // Disables playBar Control
            playBar.disabled = true;

            // Progress Bar style
            var sheet = document.createElement('style');            
            document.head.appendChild(sheet);
            sheet.innerHTML = progressStyle();
            
            cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", seekUpdate, "cpInfoCurrentFrame");

            function seekUpdate() { playBar.valueAsNumber = cpInfoCurrentFrame; }  


            // https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript


            // Progress Bar rewind
            
            /*if (isIE) {				
                seekerBar.addEventListener("change", vidSeek, false);						
            } else {
                seekerBar.addEventListener("input", vidSeek, false);
            } 

            function vidSeek() {            
                 if (playBar.valueAsNumber < cpInfoCurrentFrame) {
                    cpCmndGotoFrameAndResume = playBar.valueAsNumber
                } else {
                    playBar.valueAsNumber = cpInfoCurrentFrame
                }
            }*/
            
        }
            
        