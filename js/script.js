var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  var key = e.key;
  if (e.key === "1") {
    box1.innerText = "🤖";
  } else if (e.key === "2") {
    box2.innerText = "👽";
  } else if (e.key === "3") {
    box3.innerText = "🍄";
  }
});

var clear = document.querySelector("button");

clear.addEventListener("click", function () {
  box1.innerText = "1";
  box2.innerText = "2";
  box3.innerText = "3";
});
