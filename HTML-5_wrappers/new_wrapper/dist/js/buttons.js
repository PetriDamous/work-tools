var currentPage = 0;
var clickedID = null;
var startTimeStamp = null;
var processedUnload = false;
var reachedEnd = false;
var audio = new Audio();
var pause = 0;
var muteCounter = 0;
var lessonNumber = "40";
//var pageVisited = new Array(pageArray.length);
var pageDisplayNum = null;
var pageArray = [];
var pageVisited = new Array(pageArray.length);
//var param;

/*$(document).ready(function() {*/
    $('#mnBTN').hover(function() {
      $('#mnBTN').attr('src','images/buttons/menu_hover.png');
    }, function() {
      $('#mnBTN').attr('src','images/buttons/menu_on.png');
    });
    $('#ccBTN').hover(function() {
        $('#ccBTN').attr('src','images/buttons/cc_hover.png');
      }, function() {
        $('#ccBTN').attr('src','images/buttons/cc_on.png');
    });
    $('#glBTN').hover(function() {
        $('#glBTN').attr('src','images/buttons/glossary_hover.png');
      }, function() {
        $('#glBTN').attr('src','images/buttons/glossary_on.png');
    });
    $('#opBTN').hover(function() {
        $('#opBTN').attr('src','images/buttons/options_hover.png');
      }, function() {
        $('#opBTN').attr('src','images/buttons/options_on.png');
    });
    $('#muBTN').hover(function() {
        $('#muBTN').attr('src','images/buttons/mute_hover.png');
      }, function() {
        $('#muBTN').attr('src','images/buttons/mute_on.png');
    });
    $('#ppBTN').hover(function() {
        $('#ppBTN').attr('src','images/buttons/play_hover.png');
      }, function() {
        $('#ppBTN').attr('src','images/buttons/play_on.png');
    });
  /*});*/

function showSpinnerWhileIFrameLoads() {
    var iframe = document.getElementById("Stage");
        $(iframe).on('load', function() {
            document.getElementById("spinner").style.display='none';
        });
}

function doStart(){
    for(i = 0; i < pageArray.length; i++){
        pageVisited.splice(i,1,"&#10139;");
    }
    enableButtons();
    loadGlossary('');
    startTimeStamp = new Date();
    ScormProcessInitialize();
    //it's a best practice to set the completion status to incomplete when
    //first launching the course (if the course is not already completed)
    var completionStatus = ScormProcessGetValue("cmi.completion_status", true);
    if (completionStatus == "unknown"){
        ScormProcessSetValue("cmi.completion_status", "incomplete");
    }
    //see if the user stored a bookmark previously (don't check for errors
    //because cmi.location may not be initialized
    var bookmark = ScormProcessGetValue("cmi.location", false);
    
    //if there isn't a stored bookmark, start the user at the first page
    if (bookmark == ""){
        currentPage = 0;
    //document.getElementById("butPlay").value = "Play";
    }
    else{
        //if there is a stored bookmark, prompt the user to resume from the previous location
        if (confirm("Would you like to resume from where you previously left off?")){
            currentPage = parseInt(bookmark, 10);
        }
        else{
            currentPage = 0;
        }
    }
    goToPage();
}
function doUnload(pressedExit){
    //don't call this function twice
    if (processedUnload == true){return;}
    processedUnload = true;
    //record the session time
    var endTimeStamp = new Date();
    var totalMilliseconds = (endTimeStamp.getTime() - startTimeStamp.getTime());
    var scormTime = ConvertMilliSecondsIntoSCORM2004Time(totalMilliseconds);
    ScormProcessSetValue("cmi.session_time", scormTime);
    //if the user just closes the browser, we will default to saving 
    //their progress data. If the user presses exit, he is prompted.
    //If the user reached the end, the exit normall to submit results.
    if (pressedExit == false && reachedEnd == false){
        ScormProcessSetValue("cmi.exit", "suspend");
    }
    ScormProcessTerminate();
}
//SCORM requires time to be formatted in a specific way
function ConvertMilliSecondsIntoSCORM2004Time(intTotalMilliseconds){
    var ScormTime = "";
    var HundredthsOfASecond;	//decrementing counter - work at the hundreths of a second level because that is all the precision that is required
    var Seconds;	// 100 hundreths of a seconds
    var Minutes;	// 60 seconds
    var Hours;		// 60 minutes
    var Days;		// 24 hours
    var Months;		// assumed to be an "average" month (figures a leap year every 4 years) = ((365*4) + 1) / 48 days - 30.4375 days per month
    var Years;		// assumed to be 12 "average" months
    var HUNDREDTHS_PER_SECOND = 100;
    var HUNDREDTHS_PER_MINUTE = HUNDREDTHS_PER_SECOND * 60;
    var HUNDREDTHS_PER_HOUR   = HUNDREDTHS_PER_MINUTE * 60;
    var HUNDREDTHS_PER_DAY    = HUNDREDTHS_PER_HOUR * 24;
    var HUNDREDTHS_PER_MONTH  = HUNDREDTHS_PER_DAY * (((365 * 4) + 1) / 48);
    var HUNDREDTHS_PER_YEAR   = HUNDREDTHS_PER_MONTH * 12;
    HundredthsOfASecond = Math.floor(intTotalMilliseconds / 10);
    Years = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_YEAR);
    HundredthsOfASecond -= (Years * HUNDREDTHS_PER_YEAR);
    Months = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MONTH);
    HundredthsOfASecond -= (Months * HUNDREDTHS_PER_MONTH);
    Days = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_DAY);
    HundredthsOfASecond -= (Days * HUNDREDTHS_PER_DAY);
    Hours = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_HOUR);
    HundredthsOfASecond -= (Hours * HUNDREDTHS_PER_HOUR);
    Minutes = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MINUTE);
    HundredthsOfASecond -= (Minutes * HUNDREDTHS_PER_MINUTE);
    Seconds = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_SECOND);
    HundredthsOfASecond -= (Seconds * HUNDREDTHS_PER_SECOND);
    if (Years > 0) {
        ScormTime += Years + "Y";
    }
    if (Months > 0){
        ScormTime += Months + "M";
    }
    if (Days > 0){
        ScormTime += Days + "D";
    }
    //check to see if we have any time before adding the "T"
    if ((HundredthsOfASecond + Seconds + Minutes + Hours) > 0 ){
        ScormTime += "T";
        if (Hours > 0){
            ScormTime += Hours + "H";
        }
        if (Minutes > 0){
            ScormTime += Minutes + "M";
        }
        if ((HundredthsOfASecond + Seconds) > 0){
            ScormTime += Seconds;
            if (HundredthsOfASecond > 0){
                ScormTime += "." + HundredthsOfASecond;
            }
            ScormTime += "S";
        }
    }
    if (ScormTime == ""){
        ScormTime = "0S";
    }
    ScormTime = "P" + ScormTime;
    return ScormTime;
}
function loadAudio(){
    var audiopath="";
    var s2 =  pageArray[currentPage];
    //var n = pageBLANK.includes(s2);
        if(pageBLANK.includes(s2)){
            //alert("blank");
            audiopath = "sounds/blank.mp3";
            audio.currentTime = 0;
            audio.src = audiopath;
            audio.play();
          }else{
            //alert("not blank");
            var s3 = s2.substring(4);
            // audiopath = "sounds/L" + lessonNumber + "_" + s3 + ".mp3";
            audiopath = "sounds/" + s2 + ".mp3";
            audio.currentTime = 0;
            audio.src = audiopath;
            audio.play();
          }
}
    
    
 
  // enable and disable function for all buttons

function enableFF(){
    document.getElementById("btnFF").disabled = false;
}
function disableFF(){
   document.getElementById("btnFF").disabled = true;
}  
function disableRefresh(){
    document.getElementById("btnPause").disabled = true;
}
function enableRefresh(){
    document.getElementById("btnPause").disabled = false;
}
function disableMenu(){
    document.getElementById("btnMenu").disabled = true;
    $('#TOC').hide().animate({opacity: 0});
}
function enableMenu(){
    document.getElementById("btnMenu").disabled = false;
}
function disableRW(){
    document.getElementById("btnPrev").disabled = true;
}
function enableRW(){
    document.getElementById("btnPrev").disabled = false;
}
function disableGlossary(){
    document.getElementById("btnGlossary").disabled = true;
}
function enableGlossary(){
    document.getElementById("btnGlossary").disabled = false;
}
function disableOptions(){
    document.getElementById("btnOptions").disabled = true;
}
function enableOptions(){
    document.getElementById("btnOptions").disabled = false;
}
function disableCC(){
    document.getElementById("btnCC").disabled = true;
}
function enableCC(){
    document.getElementById("btnCC").disabled = false;
}
function disableAudio(){
    document.getElementById("btnAudio").disabled = true;
}
function enableAudio(){
    document.getElementById("btnAudio").disabled = false;
}
function enableButtons(){
    enableFF();
    enableRefresh();
    enableMenu();
    enableRW();
    enableGlossary();
    enableOptions();
    enableCC();
    enableAudio();
 }
 function disableButtons(){
    disableFF();
    disableRefresh();
    disableMenu();
    disableRW();
    disableGlossary();
    disableOptions();
    disableCC();
    disableAudio();
 }
/*$(function() {
    $( "#btnResources" ).click(function() {
        $( "#TOC" ).hide();
        $( "#Glossary" ).hide();
        $( "#cc_Text" ).hide();
        loadResources();
        $( "#Resources" ).toggle();
    });
});*/
//var param;
function hideMenus() {
    $( "#Glossary" ).hide();
    $( "#Options" ).hide();
    $( "#TOC" ).hide();
    $( "#cc_Text" ).hide();
}

$( "#btnExit" ).click(function() {
    alert("Are you sure you want to exit?");
    doExit();
});

$( "#btnGlossary" ).click(function() {
    if($('#Glossary').is(':visible')){
        $('#Glossary').hide().animate({opacity: 0});
    }
    else{
        $( "#cc_Text" ).hide();
        $( "#Options" ).hide();
        $( "#TOC" ).hide();
    $('#Glossary').show().animate({opacity: .95});
    }
        loadGlossary(param);
});
$( "#btnOptions" ).click(function() {
    if($('#Options').is(':visible')){
        $('#Options').hide().animate({opacity: 0});
    }
    else{
        $( "#cc_Text" ).hide();
        $( "#Glossary" ).hide();
        $( "#TOC" ).hide();
    $('#Options').show().animate({opacity: .95});
    loadOptions();
}
});
$( "#btnMenu" ).click(function() {
    if($('#TOC').is(':visible')){
        $('#TOC').hide().animate({opacity: 0});
    }
    else{
        $( "#cc_Text" ).hide();
        $( "#Glossary" ).hide();
        $( "#Options" ).hide();
        $('#TOC').show().animate({opacity: .95});
        loadMenu();
    }
});
$( "#btnCC" ).click(function() {
    if($('#cc_Text').is(':visible')){
        $('#cc_Text').hide().animate({opacity: 0});
    }
    else{
        $( "#TOC" ).hide();
        $( "#Glossary" ).hide();
        $( "#Options" ).hide();
        $('#cc_Text').show().animate({opacity: .95});
        loadCC();
    }
});

function doAudioPause(){
	audio.pause();
}

function FinalComplete() {
    pageVisited.splice(3,1,"&#10004;");
    loadMenu();
}

var termGiven = null;
//var param = null;
function loadGlossary(param){
    if (param !== 'undefined'){
        $.ajax({
            url: "glossary.xml",
              dataType: "xml",
              success: function( xmlResponse ) {
              myXML = $(xmlResponse).find('term').filter(function() {
                return $(this).find('name').text() == param;
              });
              var display = myXML.children().map(function(){
                return $(this).text();
              }).get().join(' ');
              $("#log").text('');
              $("#log").text(display);
              $( "#terms" ).val(param); 
              }
          });
    }
     //var param = '';
        function log( message ) {
            $( "<div/>" ).text( message ).prependTo( "#log" );
            $( "#log" ).attr( "scrollTop", 0 );
          }
          $.ajax({
            url: "glossary.xml",
            dataType: "xml",
            success: function( xmlResponse ) {
              var data = $( "term", xmlResponse ).map(function() {
                return {
                  value: $( "name", this ).text(),
                  id: $( "definition", this ).text()
                };
              }).get();
              //var data2 = 'l';
              $( "#terms" ).autocomplete({
                source: data,
                minLength: 0,
                select: function( event, ui ) {
                  $("#log").text('');
                  log( ui.item.value + ": " + ui.item.id );
                }
              });
            }
          });
    
    
    var elem = document.getElementById("Glossary");
    var text;
    text = "<div class='ui-widget'><label for='terms'>Search for:&nbsp; </label><input id='terms'></div><div class='ui-widget' style='margin-top:2em; font-family:Arial'>Definition:<div id='log' style='height: 300px; width:760px; overflow: auto;' class='ui-widget-content'></div><span class='close' onclick='hideMenus();'>&times;</span></div>";
    elem.innerHTML = text;
    //param = '';
}
function loadOptions(){
    var elem = document.getElementById("Options");
    var i;
    var text = "<h4 style='margin-left:20px;' class='glossTitle'>Options</h4><div id='navbarRES'><button class='btn btn-default btn-op' onclick='showKP();'>Key Points</button><button class='btn btn-default btn-op' onclick='showLinks();'>Web Links</button><button class='btn btn-default btn-op' onclick='showMath();'>Math Formulas</button><button class='btn btn-default btn-op' onclick='showLabels();'>Pesticide Labels</button><button class='btn btn-default btn-op' onclick='showHELP();'>Help</button></div><div class='contentRES'><span id='links'></span><span id='keyPoints'></span><span id='mathFormulas'></span><span id='labels'></span><span class='close' onclick='hideMenus();'>&times;</span></div>";
    elem.innerHTML = text;
    var elem2 = document.getElementById("keyPoints");
    for(i = 0; i < KeyPoints.length; i++){
        $(elem2).append("<div style='margin-left:5px;'>" + KeyPoints[i] + "</div>");
    }
    $(elem).append("</div>");

}
function showLinks(){
    var w = document.getElementById("labels");
	var x = document.getElementById("links");
    var y = document.getElementById("keyPoints");
    var z = document.getElementById("mathFormulas");
    w.style.display = "none";
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none"; 
    var elem2 = document.getElementById("links");
    elem2.innerHTML = "";
    for(i = 0; i < Links.length; i++){
        $(elem2).append("<div style='margin-left:5px;'>" + Links[i] + "</div>");
    }  
}
function showKP(){
    var w = document.getElementById("labels");
	var x = document.getElementById("links");
    var y = document.getElementById("keyPoints");
    var z = document.getElementById("mathFormulas");
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none"; 
    //$(y).click(function(){ window.open(KPTrans[0], target="_blank");
    //});
}
function showMath(){
    var w = document.getElementById("labels");
	var x = document.getElementById("links");
    var y = document.getElementById("keyPoints");
    var z = document.getElementById("mathFormulas");
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    var elem2 = document.getElementById("mathFormulas");
    elem2.innerHTML = "";
    for(i = 0; i < MathFormula.length; i++){
        $(elem2).append("<div style='margin-left:5px;'>" + MathFormula[i] + "</div>");
    }  
    //$(z).click(function(){ window.open(KPTrans[1], target="_blank");
    //}); 
}
function showHELP(){
    window.open("data/help/help.pdf","_blank");
}
function showLabels(){
    var w = document.getElementById("labels");
	var x = document.getElementById("links");
    var y = document.getElementById("keyPoints");
    var z = document.getElementById("mathFormulas");
    w.style.display = "block";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    var elem2 = document.getElementById("labels");
    elem2.innerHTML = "";
    for(i = 0; i < Labels.length; i++){
        $(elem2).append("<div style='margin-left:5px;'>" + Labels[i] + "</div>");
    } 
} 
function loadResources(){
    var elem = document.getElementById("Resources");
    var i;
    var text = "<div class='container-fluid' style='margin-left:20px;'><h4 class='resTitle'>Resources</h4>";
    elem.innerHTML = text;
    for(i = 0; i < Resources.length; i++){
        $(elem).append("<div class='row' style='margin-left:20px;'><div class='col-sm-5 firstColStyle'>"+ Resources[i][0] +"</div><div class='col-sm-5 secondColStyle'>"+Resources[i][1]+"</div></div></div><hr></div>");
    }
}
function openTranscript(){
    window.open("documents/Transcript.PDF","_blank");
}
function openKeyPoint(){
    window.open("documents/KeyPoint.PDF","_blank");
}
function loadCC(){
    var elem = document.getElementById("cc_Text");
    if (cc_Text[currentPage]) {
        elem.innerHTML = cc_Text[currentPage] + "<span class='close closeCC' onclick='hideMenus();'>&times;</span>";
    } else {
        elem.innerHTML = "No Narration" + "<span class='close closeCC' onclick='hideMenus();'>&times;</span>";
    }
    
}
function incrementCounter(){
    pageDisplayNum = currentPage;
    pageDisplayNum++;
   
    document.getElementById("middle-text").innerHTML = 'Page ' + pageDisplayNum.toString() + ' of ' + pageArray.length;
}
function loadMenu(){
    var elem = document.getElementById("TOC");
        var clientHeight = elem.clientHeight;
        var i;
        var text = "<h5>&nbsp;&nbsp;&nbsp;Table of Contents<span class='close closeTOC' onclick='hideMenus();'>&times;</span></h5>";
        var link = "</div><div class='column'><a href='#' id='";
        var dislink = "</div><div class='column'><a href='#' class='disabled' id='";
        elem.innerHTML = text;
        
        for(i = 0; i < pageTitles.length; i++){
                $(elem).append("<div class='row'><div class='column'>" + pageVisited[i] + link + i + "'>" + pageTitles[i] + "</div></div>").on('click','a',function(e){
                clickedID = $(this).attr('id');
                currentPage = clickedID;
                //pageDisplayNum = currentPage+1;
                pageVisited.splice(clickedID,1,"&#10004;");
                
                //enableButtons();
                hideMenu();
                goToPage();
                //doMenuResetPage();
                
            });    
        }
}
function doMenuResetPage(){
}
/*function displayPageInCounter() {
    //document.getElementById("middle-text").innerHTML = "";
    pageDisplayNum = currentPage;
    pageDisplayNum += 1;
    //pageDisplayNum = clickedID;
    document.getElementById("middle-text").innerHTML = 'Page ' + pageDisplayNum.toString() + ' of ' + pageArray.length;
}*/
function hideMenu(){
    $('#TOC').hide();
}
function doRefresh(){
    var iframe = document.getElementById("Stage");
    iframe.src = pageArray[currentPage] + ".html"; 
}
function doMute(){
    var iframe = document.getElementById("Stage");
    //if (audio == null){ alert("you got it"); }
	if (muteCounter == 0){
        audio.muted = true;
        $('#muBTN').attr('src','images/buttons/mute_off.png');
        $('#muBTN').hover(function() {
            $('#muBTN').attr('src','images/buttons/mute_hover.png');
          }, function() {
            $('#muBTN').attr('src','images/buttons/mute_off.png');
        });
        //document.getElementById("btnAudio").innerHTML = "<img id='muBTN' src='images/buttons/mute_off.png'>";
        iframe.contentWindow.muteSound();
        //iframe.contentWindow.createjs.Sound.muted = true; 
        muteCounter++;
	}else if (muteCounter==1){
        audio.muted = false;
        $('#muBTN').attr('src','images/buttons/mute_on.png');
        $('#muBTN').hover(function() {
            $('#muBTN').attr('src','images/buttons/mute_hover.png');
          }, function() {
            $('#muBTN').attr('src','images/buttons/mute_on.png');
        });
        //document.getElementById("btnAudio").innerHTML = "<img id='muBTN' src='images/buttons/mute_on.png'>";
        iframe.contentWindow.unmuteSound();
        //iframe.contentWindow.createjs.Sound.muted = false; 
        muteCounter--;
	}
}
audio.onplaying = function(){
    $('#ppBTN').attr('src','images/buttons/pause_on.png')
    $('#ppBTN').hover(function() {
        $('#ppBTN').attr('src','images/buttons/pause_hover.png');
      }, function() {
        $('#ppBTN').attr('src','images/buttons/pause_on.png');
    });   
}
audio.onpause = function(){
    $('#ppBTN').attr('src','images/buttons/play_on.png')
    $('#ppBTN').hover(function() {
        $('#ppBTN').attr('src','images/buttons/play_hover.png');
      }, function() {
        $('#ppBTN').attr('src','images/buttons/play_on.png');
    });   
}
audio.onended = function(){
    $('#ppBTN').attr('src','images/buttons/replay_on.png');
    //$('#ppBTN').click(function (){
        //doRefresh();
    //});
    $('#ppBTN').hover(function() {
        $('#ppBTN').attr('src','images/buttons/replay_hover.png');
      }, function() {
        $('#ppBTN').attr('src','images/buttons/replay_on.png');
    });
}
function checkAudio(){
    if(audio.src !== ""){
        doPausePlay();
    }
}
function doPausePlay() {
    var iframe = document.getElementById("Stage");
        if(audio.ended){
            doRefresh();
            //iframe.contentWindow.exportRoot.gotoAndPlay(0);
        }
        if(!audio.paused){
            audio.pause();
            //iframe.contentWindow.isPlaying();
            //iframe.contentWindow.stage.stop();
            iframe.contentWindow.exportRoot.stop();
        }    
        else{
            audio.play();
            //iframe.contentWindow.isPaused();
            iframe.contentWindow.exportRoot.play();
        }
        
}
    function doPrevious(){
        if (currentPage > 0){
            currentPage--;
        }
        incrementCounter();
        loadCC();
        loadAudio();
        loadOptions();
        goToPage();
        $('#btnFF').prop("disabled",false)
    }
    function doNext(){
        
        if (currentPage == (pageArray.length - 1)){
            doExit();
        }else{
            currentPage++;
            incrementCounter();
            var n = pageCOL.includes("page" + (currentPage+1));
            if(n == true){
                 disableFF();
                 disableRW();
                 disableRefresh();
                 disableMenu();
            }
            loadCC();
            loadOptions();
            goToPage();
        }
    }
function goToPage(){
    //var prevButton = document.getElementById("butPrevious");
    //var nextButton = document.getElementById("butNext");
    //var audiopath = "audio/" + pageArray[currentPage] +".mp3";

    var spinner = document.getElementById("spinner");
    spinner.style.display = "block";
    //document.getElementById("btnPause").innerHTML = 'Pause';
    //navigate the iFrame to the content
    var theIframe = document.getElementById("Stage");
    theIframe.src = pageArray[currentPage] + ".html";
    incrementCounter();
    showSpinnerWhileIFrameLoads();
    //change visited indicator for nav menu
    if(currentPage !== pageArray.length-1){
    pageVisited.splice(currentPage,1,"&#10004;");
    }
    //$('#btnFF').removeClass('glow-button');
    //audio.src = audiopath; 
    audio.pause();
    //loadMenu();
    //loadAudio();
    //doProgBar(); 
     //save the current location as the bookmark
     ScormProcessSetValue("cmi.location", currentPage);

    if (currentPage == (pageArray.length - 1)){
        reachedEnd = true;
        ScormProcessSetValue("cmi.completion_status", "completed");
    }
    
}
function doExit(){

    //note use of short-circuit AND. If the user reached the end, don't prompt.
    //just exit normally and submit the results.
    if (reachedEnd == false && confirm("Would you like to save your progress to resume later?")){
        //set exit to suspend
        ScormProcessSetValue("cmi.exit", "suspend");
        
        //issue a suspendAll navigation request
        ScormProcessSetValue("adl.nav.request", "suspendAll");
    }
    else{
        //set exit to normal
        ScormProcessSetValue("cmi.exit", "");
        
        //issue an exitAll navigation request
        ScormProcessSetValue("adl.nav.request", "exitAll");
    }
    
    //process the unload handler to close out the session.
    //the presense of an adl.nav.request will cause the LMS to 
    //take the content away from the user.
    doUnload(true);
    
}
var correctCount = 0;
function tallyAnswers(){
    correctCount++;
    //alert(correctCount);
}
//called from the assessmenttemplate.html page to record the results of a test
//passes in score as a percentage
function RecordTest(score){
    
    ScormProcessSetValue("cmi.score.raw", score);
    ScormProcessSetValue("cmi.score.min", "0");
    ScormProcessSetValue("cmi.score.max", "100");
    
    var scaledScore = ((score * 25) / 100);
    ScormProcessSetValue("cmi.score.scaled", scaledScore);
    //alert(scaledScore*25);
    //consider 70% to be passing
    if (scaledScore >= .80){
        ScormProcessSetValue("cmi.success_status", "passed");
    }
    else{
        ScormProcessSetValue("cmi.success_status", "failed");
    }
}
function doProgBar() {
    var displayNum = parseInt(currentPage) + 1;
    var max = pageArray.length;
    $("#progBar").val((displayNum*100)/max);
    document.getElementById("txtCounter").value = displayNum + ' of ' + pageArray.length;
    document.getElementById("nav-text").innerHTML = "This is text for page " + displayNum;
    if (displayNum > (pageArray.length-1)){
        document.getElementById("btnExit").disabled = false;       
    }else{
        document.getElementById("btnExit").disabled = true; 
    }
}