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

function selectTipOption() {
    //looking to caputre JUST the single clicked item & revert rest
    for (let i = 0; i < tipOptionActive.length; i++) {
        tipOptionActive[i].addEventListener("click", () => {
            switch (tipOptionActive[i].innerHTML) {
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
        });
        console.log(chosen)
    };
    
    //above works, below does not
    //based on which is true, change background color & save for tip calc
    console.log("made it")
    for (let element of Object.keys(chosen)) {
        let iteration = 0;
        if (chosen[element] === true) {
            tipOptionActive[iteration].style.backGroundColor = "hsl(184, 14%, 56%)"
        };
        iteration++;
    }

    // if (chosen.five === true) {
        // tipOptionActive[0].style.backGroundColor = "hsl(184, 14%, 56%)"
    //     tipPercentage = 5
    // } else if (chosen.ten === true) {
    //     tipOptionActive[1].style.backGroundColor = "hsl(184, 14%, 56%)"
    //     tipPercentage = 10
    // } else if (chosen.fifteen === true) {
    //     tipOptionActive[2].style.backGroundColor = "hsl(184, 14%, 56%)"
    //     tipPercentage = 15
    // } else if (chosen.twentyFive === true) {
    //     tipOptionActive[3].style.backGroundColor = "hsl(184, 14%, 56%)"
    //     tipPercentage = 25
    // } else if (chosen.fifty === true) {
    //     tipOptionActive[4].style.backGroundColor = "hsl(184, 14%, 56%)"
    //     tipPercentage = 50
    // } else if (chosen.custom === true) {
    //     tipOptionActive[0].style.backGroundColor = "hsl(184, 14%, 56%)"
    //     // will need to change this once custom tip input has been set up
    //     tipPercentage = 0
    //     //
    // }
    // console.log(tipPercentage)
};

selectTipOption();


"hsl(183, 100%, 15%)"
"hsl(184, 14%, 56%)"

//make custom an input with onChange like above with bill

