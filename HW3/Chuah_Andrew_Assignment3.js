/**
 * I pledge my honor that I have abided by the Stevens Honor System.
 * Andrew Chuah
 */

 var result = 0;
 var currentOp = '';
 var buffer = 0;
 setDisplay(0);

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result = 0;
   buffer = 0;
   currentOp = '';
   setDisplay(result);
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerText = str;   
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   if(parseInt(String(result) + String(num)) < 1000000000 && parseInt(String(result) + String(num)) > -1000000000){
      result = parseInt(String(result) + String(num));
      setDisplay(result);
   }
   else{
      setDisplay(999999999);
   }
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if(currentOp != ''){
      currentOp = op;
   }
   else{
      buffer = result;
      result = 0;
      currentOp = op;
   }
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if(currentOp == '+'){
      if(buffer + result < 1000000000 && buffer + result > -1000000000){
         setDisplay(buffer + result);
         result = buffer + result;
         currentOp = '';
      }
      else{
         setDisplay(999999999);
      }
   }
   else if(currentOp == '-'){
      if(buffer - result < 1000000000 && buffer + result > -1000000000){
         setDisplay(buffer - result);
         result = buffer - result;
         currentOp = '';
      }
      else{
         setDisplay(-999999999);
      }
   }
   else if(currentOp == '*'){
      if(buffer * result < 1000000000 && buffer * result > -1000000000){
         setDisplay(buffer * result);
         result = buffer * result;
         currentOp = '';
      }
      else{
         setDisplay(999999999);
      }
   }
   else if(currentOp == '/'){
      if(buffer == 0 && result == 0){
         resetCalc();
         setDisplay('ERROR');
      }
      else if(result == 0 && buffer != 0){
         resetCalc();
         setDisplay('ERROR');
      }
      else{
         setDisplay(Math.floor(buffer / result));
         result = Math.floor(buffer / result);
         currentOp = '';
      }
   }
   else if(currentOp == ''){
      return;
   }
}