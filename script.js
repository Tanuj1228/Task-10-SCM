let string = ""; // Initializes an empty string variable to store the calculator input
let buttons = document.querySelectorAll(".button"); // Selects all elements with the class ".button" and stores them

// Iterates through each button and adds a click event listener to them
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // Adds a click event listener to each button
    if (e.target.innerHTML == "=") {
      // Checks if the clicked button is the "=" button
      string = eval(string); // Evaluates the expression stored in the 'string' variable
      document.querySelector("input").value = string; // Displays the evaluated result in the calculator's input field
    } else if (e.target.innerHTML == "AC") {
      // Checks if the clicked button is the "AC" button
      string = ""; // Clears the 'string' variable (calculator input)
      document.querySelector("input").value = string; // Clears the calculator's input field
    } else if (e.target.innerHTML == "M-") {
      // Checks if the clicked button is the "M-" button
      string = -string; // Attempts to make the current 'string' negative (flips its sign)
      document.querySelector("input").value = string; // Displays the modified 'string' in the calculator's input field
    } else {
      // Executes when none of the above conditions are met (for numbers and operators)
      console.log(e.target); // Logs the clicked button's element to the console (for debugging purposes)
      string = string + e.target.innerHTML; // Appends the content of the clicked button to the 'string' variable
      document.querySelector("input").value = string; // Updates the calculator's input field with the updated 'string'
    }
  });
});
