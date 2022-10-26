var screenWidth = innerWidth;
var labelsElement;
var figureElement;

var intervalHandlerCheckNumber;
var intervalHandlerChangSlid;
var intervalHandlerChangBg;
var intervalHandlerLoop;
var intervalHandlerClearBg;

var intervalHandlerbackwardLoop;
var intervalHandlerBackwardChangBg;
var intervalHandlerClearBgBackward;

var incressingNumber = 0;

var btnHolderDiv;

var headerBTN;
var navContainer;

var teacherRadioBTN;
var schoolRadioBTN;
var label;
var droptdownLi;
var spanContieanerTeacher;

function techerFeedback() {

    if(teacherRadioBTN.value == "teacher") {
        spanContieanerTeacher = document.querySelectorAll(".teacher_feedback");
        label = spanContieanerTeacher[0].querySelector("label");
        droptdownLi = spanContieanerTeacher[1].querySelector("select");

        spanContieanerTeacher[0].style.cssText = "opacity: 1;";
        spanContieanerTeacher[1].style.cssText = "opacity: 1; visibility: initial;";

        label.style.cssText = "animation-name: teacherFeedback; animation-duration: 0.5s; animation-delay: 0s; animation-timing-function: ease-in-out; animation-iteration-count: 1; animation-fill-mode: forwards; animation-direction: reverse;";
        droptdownLi.style.cssText = "animation-name: teacherFeedback; animation-duration: 0.5s; animation-delay: 0s; animation-timing-function: ease-in-out; animation-iteration-count: 1; animation-fill-mode: forwards; animation-direction: reverse;";
    }
}

function schoolFeedback() {

    console.log(schoolRadioBTN.value);
    if (schoolRadioBTN.value == "school") {
        spanContieanerTeacher = document.querySelectorAll(".teacher_feedback");
        label = spanContieanerTeacher[0].querySelector("label");
        droptdownLi = spanContieanerTeacher[1].querySelector("select");

        spanContieanerTeacher[0].style.cssText = "opacity: 0;";
        spanContieanerTeacher[1].style.cssText = "opacity: 0; visibility: hidden;";

        label.style = "none";
        droptdownLi.style = "none";
    }
}

function loop() {
    incressingNumber++;
}

function applayInterval (functionName) {
   return setInterval(functionName, 6000);
}

function chageSlid() {
    var size = screenWidth * incressingNumber;

    if(incressingNumber == 0) {
        figureElement.style.cssText = "margin-left: -" + size + "px;";
        console.log("hey man");

    } else if(incressingNumber <= 5) {
        figureElement.style.cssText = "margin-left: -" + size + "px;";
    }
}

function chageBgLabel(element) {
    if(incressingNumber <= 4) {
        
            index = incressingNumber + 1;
            element[index].style.cssText = "background-color: #000;";
  //          console.log(incressingNumber + " " + index);
    }
}

function clearBgLabel(element) {
    if(incressingNumber >= 0) {
        if(incressingNumber != 6) {
            if(incressingNumber == 5) {
   //             console.log("it is five" + " " + incressingNumber);
            } else {
                index = incressingNumber;
                element[index].style.cssText = "background-color: none;";
            }
        }
    }
}



function backwardLoop() {
    incressingNumber--;

    if(incressingNumber <= 0) {
        clearInterval(intervalHandlerBackwardChangBg);
        clearInterval(intervalHandlerClearBgBackward);

        if(incressingNumber == -1) {
            clearInterval(intervalHandlerbackwardLoop);
            clearInterval(intervalHandlerChangSlid);
        }
    }
}

function changeLabelTopBottom(element) {
    index = incressingNumber - 1;
    element[index].style.cssText = "background-color: #000;";
}

function clearBgLabelBackward(element) {
    if(incressingNumber <= 5) {
        element[incressingNumber].style.cssText = "background-color: none;";
    }
}


function checkNumberValue() {
    if(incressingNumber >= 6) {
        clearInterval(intervalHandlerChangSlid);
        clearInterval(intervalHandlerChangBg);
        clearInterval(intervalHandlerLoop);
        clearInterval(intervalHandlerClearBg);
        clearInterval(intervalHandlerCheckNumber);
        
        console.log("interval has been cleaned" + " " + incressingNumber);
        intervalHandlerbackwardLoop = applayInterval(backwardLoop, 6000);
        intervalHandlerChangSlid = applayInterval(chageSlid, 5999);
        intervalHandlerBackwardChangBg = setInterval(changeLabelTopBottom, 5999, labelsElement);
        intervalHandlerClearBgBackward = setInterval(clearBgLabelBackward, 5999, labelsElement);

    }
}

function automaticSlid() {
    labelsElement = document.querySelectorAll("label");
    figureElement = document.querySelector("figure");

    labelsElement[incressingNumber].style.cssText = "background-color: #000;";

    intervalHandlerCheckNumber = applayInterval(checkNumberValue, 36000);
    intervalHandlerLoop = applayInterval(loop);
    intervalHandlerChangSlid = applayInterval(chageSlid, 5999);
    intervalHandlerChangBg = setInterval(chageBgLabel, 5999, labelsElement);
    intervalHandlerClearBg = setInterval(clearBgLabel, 5999, labelsElement);
}

function clearIntervals() {
    clearInterval(intervalHandlerCheckNumber);
    clearInterval(intervalHandlerLoop);
    clearInterval(intervalHandlerChangSlid);
    clearInterval(intervalHandlerChangBg);
    clearInterval(intervalHandlerClearBg);

    clearInterval(intervalHandlerbackwardLoop);
    clearInterval(intervalHandlerBackwardChangBg);
    clearInterval(intervalHandlerClearBgBackward);
}

function fastLoop(element) {
    for(i = 0; i <= 5; i++) {
        element[i].style.cssText = "background-color: none";
    }
}

window.onload = function() {
    btnHolderDiv = document.querySelector("#btn-holders");
    headerBTN = document.querySelector("#menuBTN");
    navContainer = document.querySelector(".nav");

    teacherRadioBTN = document.querySelector("#teacher");
    schoolRadioBTN = document.querySelector("#school");

    automaticSlid()

    btnHolderDiv.addEventListener("click", function(e) {
        if(e.target.tagName == "LABEL") {
            let parent = e.target.parentElement;
            let labelArray = parent.children;
            let labelNumber = e.target.className.charAt(5);
            let amount = Number(labelNumber) - 1;
            let size = amount * screenWidth;

            clearIntervals();
            fastLoop(labelArray);

            figureElement.style.cssText = "margin-left: -" + size + "px;";
            e.target.style.cssText = "background-color: #000"; 
        }

    }, false);

    headerBTN.addEventListener("click", function(e) {
        if(innerWidth <= 480) {
            if(navContainer.style.cssText == "display: initial;") {
                navContainer.style.cssText = "display: none";
            } else {
                navContainer.style.cssText = "display: initial";
            }
        }
    }, false);

    teacherRadioBTN.addEventListener("click", function(e) {
        techerFeedback();
    }, false);
    
    schoolRadioBTN.addEventListener("click", function(e) {
        schoolFeedback();
    }, false);
}