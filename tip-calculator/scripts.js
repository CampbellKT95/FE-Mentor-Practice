//bill amount
const bill = document.querySelector("#bill-input");
bill.addEventListener("change", (e) => bill.value = e.target.value);

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
            break;
        case "10%":
            chosen = {...initialValue, ten: true};
            break;
        case "15%":
            chosen = {...initialValue, fifteen: true};
            break;
        case "25%":
            chosen = {...initialValue, twentyFive: true};
            break;
        case "50%":
            chosen = {...initialValue, fifty: true};
            break;
        case "custom":
            chosen = {...initialValue, custom: true};
            break;
    };

    //based on which is true, change background color & save for tip calc
    let iteration = 0;
    for (let element of Object.keys(chosen)) {
 
        if (chosen[element] === true) {
            tipOptionActive[iteration].style.backgroundColor = "hsl(184, 14%, 56%)"
        } else if (tipOptionActive[iteration].placeholder === "Custom") {
            tipOptionActive[iteration].style.backgroundColor = "hsl(189, 41%, 97%)"
        } else {
            tipOptionActive[iteration].style.backgroundColor = "hsl(183, 100%, 15%)"
        };
        iteration++;
    };
};

//make custom an input with onChange like above with bill

