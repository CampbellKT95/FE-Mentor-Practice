//bill amount
const bill = document.querySelector("#bill-input");
bill.addEventListener("change", (e) => bill.value = e.target.value);

//tip choice
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
    };
};

selectTipOption();


"hsl(183, 100%, 15%)"
"hsl(184, 14%, 56%)"

//make custom an input with onChange like above with bill

