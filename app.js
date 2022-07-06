const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkNumber = document.getElementById("check-number");
const outputBox = document.getElementById("output-box");

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText = "Your Birthday Is Lucky😉"
    }else{
        outputBox.innerText = "Your Birthday Is Not Lucky😔"
    }
}

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob)
   compareValues(sum, luckyNumber.value)
   else
   outputBox.innerText = "Please enter both the fields"
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}
checkNumber.addEventListener("click", checkBirthDateIsLucky)