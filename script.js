var currentGo = 0;
var isWin = false;

var boxOne = document.getElementById("cellOne");
boxOne.addEventListener("click", () => {
  handleClick("cellOne");
});
var boxTwo = document.getElementById("cellTwo");
boxTwo.addEventListener("click", () => {
  handleClick("cellTwo");
});
var boxThree = document.getElementById("cellThree");
boxThree.addEventListener("click", () => {
  handleClick("cellThree");
});
var boxFour = document.getElementById("cellFour");
boxFour.addEventListener("click", () => {
  handleClick("cellFour");
});
var boxFive = document.getElementById("cellFive");
boxFive.addEventListener("click", () => {
  handleClick("cellFive");
});
var boxSix = document.getElementById("cellSix");
boxSix.addEventListener("click", () => {
  handleClick("cellSix");
});
var boxSeven = document.getElementById("cellSeven");
boxSeven.addEventListener("click", () => {
  handleClick("cellSeven");
});
var boxEight = document.getElementById("cellEight");
boxEight.addEventListener("click", () => {
  handleClick("cellEight");
});
var boxNine = document.getElementById("cellNine");
boxNine.addEventListener("click", () => {
  handleClick("cellNine");
});

function handleClick(boxId) {
  if (
    document.getElementById(boxId).innerHTML != "X" &&
    document.getElementById(boxId).innerHTML != "O"
  ) {
    if (currentGo % 2 == 0) document.getElementById(boxId).innerHTML = "X";
    else document.getElementById(boxId).innerHTML = "O";
    currentGo++;
    document.getElementById(boxId).classList.add("selected");
    isWin = checkForWin();
  }
  if (isWin)
    document.getElementById("endGame").innerHTML =
      "Winner Winner Chicken Dinner!";
  if (!isWin && currentGo == 9)
    document.getElementById("endGame").innerHTML = "It's a Draw!";
}

function checkForWin() {
  var cellOne = document.getElementById("cellOne");
  var cellTwo = document.getElementById("cellTwo");
  var cellThree = document.getElementById("cellThree");
  var cellFour = document.getElementById("cellFour");
  var cellFive = document.getElementById("cellFive");
  var cellSix = document.getElementById("cellSix");
  var cellSeven = document.getElementById("cellSeven");
  var cellEight = document.getElementById("cellEight");
  var cellNine = document.getElementById("cellNine");
  if (
    cellOne.innerHTML == cellTwo.innerHTML &&
    cellOne.innerHTML == cellThree.innerHTML
  ) {
    cellOne.classList.add("winner");
    cellTwo.classList.add("winner");
    cellThree.classList.add("winner");
    return true;
  }
  if (
    cellFour.innerHTML == cellFive.innerHTML &&
    cellFour.innerHTML == cellSix.innerHTML
  ) {
    cellFour.classList.add("winner");
    cellFive.classList.add("winner");
    cellSix.classList.add("winner");
    return true;
  }
  if (
    cellSeven.innerHTML == cellEight.innerHTML &&
    cellSeven.innerHTML == cellNine.innerHTML
  ) {
    cellSeven.classList.add("winner");
    cellEight.classList.add("winner");
    cellNine.classList.add("winner");
    return true;
  }
  if (
    cellOne.innerHTML == cellFive.innerHTML &&
    cellOne.innerHTML == cellNine.innerHTML
  ) {
    cellOne.classList.add("winner");
    cellFive.classList.add("winner");
    cellNine.classList.add("winner");
    return true;
  }
  if (
    cellThree.innerHTML == cellFive.innerHTML &&
    cellThree.innerHTML == cellSeven.innerHTML
  ) {
    cellThree.classList.add("winner");
    cellFive.classList.add("winner");
    cellSeven.classList.add("winner");
    return true;
  }
  return false;
}
