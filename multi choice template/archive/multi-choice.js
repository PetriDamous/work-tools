this.title.text = "Pop Question"
this.question.text = ""

var correctAns = 'btnB';
var displaytAns = 1;
var circleAns = 1;

var aFeedBack = "";
var bFeedBack  = "";
var cFeedBack = "";
var dFeedBack  = "";

var aTxt = "";
var bTxt = "";
var cTxt = "";
var dTxt = "";

var aBtn = this.btnA;
var bBtn = this.btnB;
var cBtn = this.btnC;
var dBtn = this.btnD;

var canvasLib = this;
var incorrectFb = this.feedBack;
var correctFb = this.correct_box;
var solutionMc = this.solutionText_mc;
var incorrectTxt = this.incorrect;

incorrectTxt.visible = false;
solutionMc.visible = false;

var btnArray = [aBtn, bBtn, cBtn, dBtn];

var ansArray = [this.atA, this.atB, this.atC, this.atD];

var fbArray = [aFeedBack, bFeedBack, cFeedBack, dFeedBack];

var ansTxtArray = [aTxt, bTxt, cTxt, dTxt];

for (var i = 0; i < ansTxtArray.length; i++) {
    ansArray[i].text = ansTxtArray[i];
}

for (var i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener('click', checkCorrect);
}

function checkCorrect (e) {
    
    if (e.target.name === correctAns) {
        correctFb.text = fbArray[displaytAns];
        canvasLib.gotoAndStop(1);
    } else {
        for (var j = 0; j < btnArray.length; j++) {
            if (e.target.name === btnArray[j].name) {                
                incorrectFb.text = fbArray[j];
            }

            if (btnArray[j].name !== correctAns) {
                btnArray[j].alpha = 0.5;
            }
        } 
        
        incorrectTxt.visible = !false;
        solutionMc.visible = !false;
        solutionMc.gotoAndStop(circleAns);
    }

    for (var i = 0; i < btnArray.length; i++) {
        btnArray[i].removeEventListener('click', checkCorrect);
    }    
}

this.stop();