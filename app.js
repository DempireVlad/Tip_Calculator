var bill = document.getElementById("bill");
var people = document.getElementById("people");
var tipButtons = document.querySelectorAll(".tip");
var customTip = document.querySelector(".custom-tip");
var tipAmount = document.querySelector(".tip-amount-amount");
var totalAmount = document.querySelector(".total-amount");
var resetButton = document.querySelector(".reset");
[bill, people, customTip].forEach(function (input) {
    return input.addEventListener("input", calculateTip);
});
resetButton.addEventListener("click", function () {
    [bill, people, customTip].forEach(function (input) { return (input.value = ""); });
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    resetButton.classList.add("notactive");
    tipButtons.forEach(function (btn) { return btn.classList.remove("active"); });
});
customTip.addEventListener("click", function () {
    tipButtons.forEach(function (btn) { return btn.classList.remove("active"); });
    resetButton.classList.remove("notactive");
    calculateTip();
});
tipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        tipButtons.forEach(function (btn) { return btn.classList.remove("active"); });
        button.classList.add("active");
        resetButton.classList.remove("notactive");
        customTip.value = "";
        calculateTip();
    });
});
function calculateTip() {
    var billAmount = parseFloat(bill.value) || 0;
    var numberOfPeople = parseInt(people.value) || 0;
    var tipPercentage = 0;
    var activeTipButton = document.querySelector(".tip.active");
    if (billAmount > 0 || numberOfPeople > 0) {
        resetButton.classList.remove("notactive");
    }
    if (activeTipButton) {
        tipPercentage = parseFloat(activeTipButton.value) / 100;
    }
    else if (customTip.value) {
        tipPercentage = parseFloat(customTip.value) / 100;
    }
    var tipPerPerson = (billAmount * tipPercentage) / numberOfPeople;
    var totalPerPerson = billAmount / numberOfPeople + tipPerPerson;
    if (numberOfPeople > 0 && billAmount > 0) {
        tipAmount.textContent = "$".concat(tipPerPerson.toFixed(2));
        totalAmount.textContent = "$".concat(totalPerPerson.toFixed(2));
    }
    else {
        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
    }
}
