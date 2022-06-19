const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserNumberInput(){
return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(operationIdentitfier, prevResult, operationNumber, newResult){
    const logEntry={
        operation: operationIdentitfier,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


function calculation(calculationType){
    if (
        calculationType !== "ADD" && 
        calculationType !== "SUBSTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE") {
            return;
        }

    if (
        calculationType === "ADD" || 
        calculationType === "SUBSTRACT" ||
        calculationType === "MULTIPLY" ||
        calculationType === "DIVIDE" ||
        enteredNumber != 0){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === "ADD"){
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBSTRACT"){
        currentResult -= enteredNumber;
        mathOperator = "-"
    } else if (calculationType === "MULTIPLY"){
        currentResult *= enteredNumber;
        mathOperator = "*"
    } else if (calculationType === "DIVIDE"){
        currentResult /= enteredNumber;
        mathOperator = "/"
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
        }
    
}


addBtn.addEventListener('click', calculation.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculation.bind(this, 'SUBSTRACT'));
multiplyBtn.addEventListener('click', calculation.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculation.bind(this, 'DIVIDE'));
