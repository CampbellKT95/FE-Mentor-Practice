//bill amount
const bill = document.querySelector("#bill-input");
bill.addEventListener("change", (e) => bill.value = e.target.value);

const customTip = document.querySelector(".custom-tip-option");
customTip.addEventListener("change", (e) => customTip.value = e.target.value)

//tip choice
let tipPercentage = 0;
const tipOptionActive = document.querySelectorAll(".chosen-tip");
let chosen = {
    five : false,
    ten : false,
    fifteen : false,
    twentyFive: false,
    fifty: false,
    custom : false
};

const initialValue = {
    five : false,
    ten : false,
    fifteen : false,
    twentyFive: false,
    fifty: false,
    custom : false
}

for (let i = 0; i < tipOptionActive.length; i++) {
    tipOptionActive[i].addEventListener("click", selectTipOption)
};

function selectTipOption(e) {
    //looking to caputre JUST the single clicked item & revert rest
    switch (e.target.innerHTML) {
        case "5%":
            chosen = {...initialValue, five: true};
            tipPercentage = 5;
            break;
        case "10%":
            chosen = {...initialValue, ten: true};
            tipPercentage = 10;
            break;
        case "15%":
            chosen = {...initialValue, fifteen: true};
            tipPercentage = 15;
            break;
        case "25%":
            chosen = {...initialValue, twentyFive: true};
            tipPercentage = 25;
            break;
        case "50%":
            chosen = {...initialValue, fifty: true};
            tipPercentage = 50;
            break;
        case "custom":
            chosen = {...initialValue, custom: true};
            tipPercentage = customTip
            break;
    };
    //based on which is true, change background color & save for tip calc
    let iteration = 0;
    for (let element of Object.keys(chosen)) {
 
        if (chosen[element] === true) {
            tipOptionActive[iteration].style.backgroundColor = "hsl(184, 14%, 56%)";
        } else if (tipOptionActive[iteration].placeholder === "Custom") {
            tipOptionActive[iteration].style.backgroundColor = "hsl(189, 41%, 97%)";
        } else {
            tipOptionActive[iteration].style.backgroundColor = "hsl(183, 100%, 15%)";
        };
        iteration++;
    };
};

//capturing onChange for number of people to split the bill
const numberOfPeople = document.querySelector(".number-of-people-input");
const numberOfPeopleInput = document.querySelector(".number-of-people-error-span");
numberOfPeople.addEventListener("change", setNumberOfPeople);

function setNumberOfPeople(e) {
    numberOfPeople.value = e.target.value;
    if (parseInt(numberOfPeople.value) === 0) {
        numberOfPeople.style.border = "2px solid red";
        numberOfPeopleInput.className = "number-of-people-error";
    } else {
        numberOfPeople.style.border = "2px solid hsl(185, 41%, 84%)";
        numberOfPeopleInput.className = "number-of-people-error-hide"
        calculateTip();
    };
};

const tip = document.querySelector(".tip-amount")
const total = document.querySelector(".total-amount")

function calculateTip() {
    //tip
    const totalTipAmount = (parseInt(tipPercentage)/100) * parseInt(bill.value);
    const tipPerPerson = parseInt(totalTipAmount)/parseInt(numberOfPeople.value)
    ;
    tip.innerHTML = `${tipPerPerson}`;

    //total
    const totalPerPerson = (parseInt(bill.value) + parseInt(totalTipAmount))/parseInt(numberOfPeople.value);
    total.innerHTML = `${totalPerPerson}`;
};

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", reset);
//reset all inputs
function reset() {
    bill.value = 0;
    chosen = initialValue;
    numberOfPeople.value = 1;
    tip.innerHTML = "$0";
    total.innerHTML = "$0";
};

