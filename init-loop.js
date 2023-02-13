let number = 0;
let maxNumber;
initLoop();

function initLoop() {
  console.log("initLoop");
  //The code below ensures that the incrementing numbers stop at 10
  maxNumber = 45;
  //This method below is a callback function
  loop();
}

function loop() {
  console.log("loop", number);
  //This code below "number++" adds a number and then starts the loop again
  number++;
  /*if (number < maxNumber) {
    setTimeout(loop, 200);
  }*/

  if (number < maxNumber) {
    setTimeout(loop, Math.random() * 1000);
  }
}
