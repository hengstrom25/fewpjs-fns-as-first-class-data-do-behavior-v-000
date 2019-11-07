/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
 
 function greet(time) {
   let splitTime = time.split(":");
   let intTime = splitTime.parseInt();
   return intTime
 }