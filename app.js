
function getInputValue(id){
    
    const inputMoney = parseFloat(document.getElementById(id).value)
     
    return inputMoney;

}

function getInitialInput(id){
    const intialInput = parseFloat(document.getElementById(id).innerText)
    return intialInput;
}