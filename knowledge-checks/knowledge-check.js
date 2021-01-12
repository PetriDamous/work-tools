var questionBank = [
    {
        questionNum: 1,
        question: "",
        correctAns: "btnB",
        displaytAns: 1,
        circleAns: 1,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },

    {
        questionNum: 2,
        question: "",
        correctAns: "btnD",
        displaytAns: 3,
        circleAns: 3,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },

    {
        questionNum: 3,
        question: "",
        correctAns: "btnD",
        displaytAns: 3,
        circleAns: 3,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },
    
    {
        questionNum: 4,
        question: "",
        correctAns: "btnA",
        displaytAns: 0,
        circleAns: 0,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },  

    {
        questionNum: 5,
        question: "",
        correctAns: "btnC",
        displaytAns: 2,
        circleAns: 2,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },  

    {
        questionNum: 6,
        question: "",
        correctAns: "btnC",
        displaytAns: 2,
        circleAns: 2,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },  

    {
        questionNum: 7,
        question: "",
        correctAns: "btnA",
        displaytAns: 0,
        circleAns: 0,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },  

    {
        questionNum: 8,
        question: "",
        correctAns: "btnD",
        displaytAns: 3,
        circleAns: 3,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },  

    {
        questionNum: 9,
        question: "",
        correctAns: "btnB",
        displaytAns: 1,
        circleAns: 1,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""
    },  

    {
        questionNum: 10,
        question: "",
        correctAns: "btnB",
        displaytAns: 1,
        circleAns: 1,
        aFeedBack: "",
        bFeedBack: "",
        cFeedBack: "",
        dFeedBack: "",
        aTxt: "",
        bTxt: "",
        cTxt: "",
        dTxt: ""  
    }
];

// Universal variables

var questionCount = 0;
var correctTotal = 0;
var totalQuestions = 10;

var canvasLib = this;

// Welcome Page variables

var txtWelcome = this.txtWelcome;
var txtInstructions = this.txtInstructions;

var startQuiz = this.startQuiz;

// Question Page variables

var title = this.title;
var questionNum = this.questionNum;
var question = this.question;
var correctCircle = this.correctCircle;
var gotoNext = this.gotoNext;
var feedBack = this.feedBack;
var solutionMc = this.solutionText_mc;

var aBtn = this.btnA;
var bBtn = this.btnB;
var cBtn = this.btnC;
var dBtn = this.btnD;

var atA = this.atA;
var atB = this.atB;
var atC = this.atC;
var atD = this.atD;		

title.text = "Knowledge Check";

var correctAns;
var displaytAns;
var circleAns;

var aFeedBack;
var bFeedBack;
var cFeedBack;
var dFeedBack;

var aTxt;
var bTxt;
var cTxt;
var dTxt;

var btnArray = [aBtn, bBtn, cBtn, dBtn];
var ansArray = [atA, atB, atC, atD];
var fbArray = [aFeedBack, bFeedBack, cFeedBack, dFeedBack];
var ansTxtArray = [aTxt, bTxt, cTxt, dTxt];	

// Result Page variables

var completeFeedBack = this.completeFeedBack;
var possibleScore = this.possibleScore;
var txtYourScoreIs = this.txtYourScoreIs;
var scorePercent = this.scorePercent;

txtYourScoreIs.txt = "Your Knowledge Check score is:"

// Hide questions and resutlts

questionsHideShow(false);
resultsHideShow(false);

// Start the Choas

startQuiz.addEventListener("click", function () {
    welcomeHideShow(false);
    questionsHideShow(true);
    initialize();			
});


gotoNext.addEventListener("click", function () {    
    if (questionCount > 9) {
        complete();
        questionsHideShow(false);
        resultsHideShow(true);      
    } else {
        initialize();
    }
});		

function initialize () {
    feedBack.visible = false;
    solutionMc.visible = false;
    gotoNext.visible = false;
    correctCircle.visible = false;
                
    var currentQuestion = questionBank[questionCount];
  
    questionNum.text = "Question " + currentQuestion.questionNum;
    question.text = currentQuestion.question;
            
    correctAns = currentQuestion.correctAns;
    displaytAns = currentQuestion.displaytAns;
    circleAns = currentQuestion.circleAns;

    aFeedBack = currentQuestion.aFeedBack;
    bFeedBack  = currentQuestion.bFeedBack;
    cFeedBack = currentQuestion.cFeedBack;
    dFeedBack  = currentQuestion.dFeedBack;

    aTxt = currentQuestion.aTxt;
    bTxt = currentQuestion.bTxt;
    cTxt = currentQuestion.cTxt;
    dTxt = currentQuestion.dTxt;
    
    btnArray = [aBtn, bBtn, cBtn, dBtn];
    ansArray = [atA, atB, atC, atD];
    fbArray = [aFeedBack, bFeedBack, cFeedBack, dFeedBack];
    ansTxtArray = [aTxt, bTxt, cTxt, dTxt];

    for (var i = 0; i < ansTxtArray.length; i++) {
        ansArray[i].text = ansTxtArray[i];
    }

    for (var i = 0; i < btnArray.length; i++) {
        btnArray[i].addEventListener('click', checkCorrect);
    }
    
    for (var i = 0; i < btnArray.length; i++) {
        btnArray[i].alpha = 1;
    }
    
    questionCount++
}

function checkCorrect (e) {    
    if (e.target.name === correctAns) {
        feedBack.text = fbArray[displaytAns];        
        correctTotal++
    } else {
        for (var j = 0; j < btnArray.length; j++) {
            if (e.target.name === btnArray[j].name) {                
                feedBack.text = fbArray[j];
            }

            if (btnArray[j].name !== correctAns) {
                btnArray[j].alpha = 0.5;
            }
        }
    }

    feedBack.visible = !false;
    solutionMc.visible = !false;
    gotoNext.visible = !false;
    correctCircle.visible = !false;
    solutionMc.gotoAndStop(circleAns);

    for (var i = 0; i < btnArray.length; i++) {
        btnArray[i].removeEventListener('click', checkCorrect);
    }    
}

function complete () {
    var percent = (correctTotal / totalQuestions) * 100;
    
    if (percent >= 70) {
        completeFeedBack.text = "Congratulations! You have completed the knowledge check. You scored " + percent + "% correct , you may proceed with the next lesson."
    } else {
        completeFeedBack.text = "You have completed the knowledge check. Your score was " + percent + "%, You should review those portions of the lesson that gave you difficulty before going on to the next lesson."
    }

    possibleScore.text = "You answered " + correctTotal + " Out of " + totalQuestions + " questions correctly." 

    scorePercent.text = percent + "%  Correct."		   
}

function welcomeHideShow (onOff) {
    txtWelcome.visible = onOff;
    txtInstructions.visible = onOff;
    startQuiz.visible = onOff;
}

function questionsHideShow (onOff) {		    
    title.visible = onOff;
    questionNum.visible = onOff;
    question.visible = onOff;
    correctCircle.visible = onOff;
    gotoNext.visible = onOff;
    feedBack.visible = onOff;
    solutionMc.visible = onOff;
    aBtn.visible = onOff;
    bBtn.visible = onOff;
    cBtn.visible = onOff;
    dBtn.visible = onOff;
    atA.visible = onOff;
    atB.visible = onOff;
    atC.visible = onOff;
    atD.visible = onOff;
}

function resultsHideShow (onOff) {
    completeFeedBack.visible = onOff;
    possibleScore.visible = onOff;
    txtYourScoreIs.visible = onOff;
    scorePercent.visible = onOff;
}

canvasLib.stop();