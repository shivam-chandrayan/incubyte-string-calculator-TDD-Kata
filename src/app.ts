import { add } from "./calculator";
import { createCalculatorHTML } from "./templates/calculator";

const renderCalculator = () => {
  const root = document.getElementById("root") as HTMLDivElement;
  root.innerHTML = createCalculatorHTML();
};
renderCalculator();

const userInput = document.getElementById("expression") as HTMLTextAreaElement;
const addButton = document.getElementById("calcBtn") as HTMLButtonElement;
const clearButton = document.getElementById("clearBtn") as HTMLButtonElement;

addButton.addEventListener("click", () => {
  const expression: string = String(userInput.value);
  const result = add(expression);
  const resultDisplay = document.getElementById(
    "result-alert"
  ) as HTMLDivElement;
  resultDisplay.innerText = `Result: ${result}`;
  resultDisplay.style.display = "block";
});

clearButton.addEventListener("click", () => {
  userInput.value = "";
  const resultDisplay = document.getElementById(
    "result-alert"
  ) as HTMLDivElement;
  resultDisplay.innerText = "";
  resultDisplay.style.display = "none";
});
