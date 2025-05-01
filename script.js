// Write your code here
console.log("script connected!!!");
const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const output = document.querySelector(".subtitle");
let count = 0;

lightbulb1.addEventListener("click", function () {
  count += 1;
  output.innerHTML =
    count === 1
      ? `You've clicked the lights ${count} time`
      : `You've clicked the lights ${count} times`;
  lightbulb1.classList.toggle("active");
});

lightbulb2.addEventListener("click", function () {
  count += 1;
  output.innerHTML =
    count === 1
      ? `You've clicked the lights ${count} time`
      : `You've clicked the lights ${count} times`;
  lightbulb2.classList.toggle("active");
});

lightbulb3.addEventListener("click", function () {
  count += 1;
  output.innerHTML =
    count === 1
      ? `You've clicked the lights ${count} time`
      : `You've clicked the lights ${count} times`;
  lightbulb3.classList.toggle("active");
});
