export const createCalculatorHTML = (): string => `
  <div id="calculator">
    <h1 id="title">Incubyte TDD Kata</h1>
    <h2>String Calculator</h2>
    <div>
      <textarea id="expression" placeholder="Enter the expression"></textarea>
    </div>
    <div class="actionBtns">
      <button id="calcBtn">Calculate</button>
      <button id="clearBtn">Clear</button>
    </div>
  </div>
  <div id="result-alert">
    <p id="result"></p>
  </div>
`;
