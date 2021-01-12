this.title.text = ""
this.question.text = ""

var correctAns = 'btnB';
var circleAns = 1;

var aFeedBack = "";
var bFeedBack  = "";
var cFeedBack = "";
var dFeedBack  = "";

var aTxt = "";
var bTxt = "";
var cTxt = "";
var dTxt = "";


var canvasLib = this;

var aBtn = canvasLib.btnA;
var bBtn = canvasLib.btnB;
var cBtn = canvasLib.btnC;
var dBtn = canvasLib.btnD;

var canvasLib = canvasLib;
var feedBack = canvasLib.feedBack;
var solutionMc = canvasLib.solutionText_mc;
var circleTxt = canvasLib.incorrect;

circleTxt.visible = false;
solutionMc.visible = false;

var btnArray = [aBtn, bBtn, cBtn, dBtn];

var ansArray = [canvasLib.atA, canvasLib.atB, canvasLib.atC, canvasLib.atD];

var fbArray = [aFeedBack, bFeedBack, cFeedBack, dFeedBack];

var ansTxtArray = [aTxt, bTxt, cTxt, dTxt];

for (var i = 0; i < ansTxtArray.length; i++) {
    ansArray[i].text = ansTxtArray[i];
}

for (var i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener('click', checkCorrect);
}

function checkCorrect (e) {

    for(var j = 0; j < btnArray.length; j++) {        
        if (e.target.name === btnArray[j].name) {                     
            feedBack.text = fbArray[j];            
        }
    }

    feedBack.visible = !false;
    solutionMc.visible = !false;
    circleTxt.visible = !false;
    solutionMc.gotoAndStop(circleAns);   
   
}

this.stop();