import "@testing-library/jest-dom";
import { createCalculatorHTML } from "../src/templates/calculator";

describe("Calculator Component", () => {
  const renderCalculator = () => {
    const root = document.createElement("root");
    root.innerHTML = createCalculatorHTML();
    document.body.appendChild(root);
  };

  const setup = () => {
    renderCalculator();

    return {
      userInput: document.querySelector("#expression") as HTMLTextAreaElement,
      addButton: document.querySelector("#calcBtn") as HTMLButtonElement,
      resultDisplay: document.querySelector("#result") as HTMLParagraphElement,
    };
  };

  beforeEach(() => {
    renderCalculator();
  });

  it("renders the calculator components", () => {
    const { userInput, addButton, resultDisplay } = setup();

    expect(userInput).toBeInTheDocument();
    expect(userInput).toHaveAttribute("placeholder", "Enter the expression");
    expect(addButton).toBeInTheDocument();
    expect(resultDisplay).toBeInTheDocument();
    expect(resultDisplay).toHaveTextContent("");
  });
});
