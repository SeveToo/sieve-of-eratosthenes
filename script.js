const App__content = document.querySelector(".App__content");
const next = document.querySelector(".next");
let numbers;
let n = 2;

function disableNumber(x) {
  x.classList.add("disabled");
}

function setSafe(x) {
  x.classList.add("safe");
}

function lookForNextNoDisabled(startFrom) {
  console.log(startFrom, numbers.length);
  for (let i = startFrom; i <= numbers.length; i++) {
    if (numbers[i].classList[1] !== "disabled") {
      setTimeout(() => {
        disablePowerOf(i + 1);
      }, 500);
      break;
    }
  }
}

function disablePowerOf(x) {
  setSafe(numbers[x - 1]);
  for (let i = x; i < numbers.length; i++) {
    if (numbers[i].getAttribute("date-num") % x == 0) disableNumber(numbers[i]);
  }
  n = x;
}

function sieveOfEratosthenes() {
  numbers = document.querySelectorAll(".content__number");
  disableNumber(numbers[0]);
  disablePowerOf(2);
  first = false;
}

function generateNumbers() {
  for (let i = 0; i < 500; i++) {
    const number = document.createElement("div");
    number.classList.add("content__number");
    number.textContent = i + 1;
    number.setAttribute("date-num", i + 1);
    App__content.append(number);
  }
}
generateNumbers();

let first = true;
next.addEventListener("click", () => {
  first ? sieveOfEratosthenes() : lookForNextNoDisabled(n);
});
