const bill = document.getElementById("bill") as HTMLInputElement;
const people = document.getElementById("people") as HTMLInputElement;
const tipButtons = document.querySelectorAll<HTMLButtonElement>(".tip")!;
const customTip = document.querySelector<HTMLInputElement>(".custom-tip")!;
const tipAmount = document.querySelector<HTMLElement>(".tip-amount-amount")!;
const totalAmount = document.querySelector<HTMLElement>(".total-amount")!;
const resetButton = document.querySelector<HTMLButtonElement>(".reset")!;

[bill, people, customTip].forEach((input) =>
  input.addEventListener("input", calculateTip),
);

resetButton.addEventListener("click", () => {
  [bill, people, customTip].forEach((input) => (input.value = ""));
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  resetButton.classList.add("notactive");
  tipButtons.forEach((btn) => btn.classList.remove("active"));
});

customTip.addEventListener("click", () => {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  resetButton.classList.remove("notactive");
  calculateTip();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    resetButton.classList.remove("notactive");
    customTip.value = "";
    calculateTip();
  });
});

function calculateTip() {
  let billAmount = parseFloat(bill.value) || 0;
  let numberOfPeople = parseInt(people.value) || 0;
  let tipPercentage = 0;
  const activeTipButton =
    document.querySelector<HTMLButtonElement>(".tip.active");

  if (billAmount > 0 || numberOfPeople > 0) {
    resetButton.classList.remove("notactive");
  }

  if (activeTipButton) {
    tipPercentage = parseFloat(activeTipButton.value) / 100;
  } else if (customTip.value) {
    tipPercentage = parseFloat(customTip.value) / 100;
  }
  const tipPerPerson = (billAmount * tipPercentage) / numberOfPeople;
  const totalPerPerson = billAmount / numberOfPeople + tipPerPerson;

  if (numberOfPeople > 0 && billAmount > 0) {
    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  }
}
