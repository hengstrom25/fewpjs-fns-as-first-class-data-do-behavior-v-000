/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
 
 function greet(time) {
   let parsedTime = parseInt(time)
   if (parsedTime < 12) return "Good Morning";
   if (parsedTime > 17) return "Good Evening";
   else return "Good Afternoon";
 }