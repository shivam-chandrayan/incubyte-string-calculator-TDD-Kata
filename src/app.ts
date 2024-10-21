import { add } from "./calculator";
import { createCalculatorHTML } from "./templates/calculator";

const renderCalculator = () => {
  const root = document.getElementById("root") as HTMLDivElement;
  root.innerHTML = createCalculatorHTML();
};
renderCalculator();

const userInput = document.getElementById("expression") as HTMLTextAreaElement;
const addButton = document.getElementById("calcBtn") as HTMLButtonElement;
const resultDisplay = document.getElementById("result") as HTMLParagraphElement;

addButton.addEventListener("click", () => {
  const expression: string = String(userInput.value);
  const result = add(expression);
  resultDisplay.innerText = `Result: ${result}`;
});
