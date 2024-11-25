var image = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".lightBoxContainer");
var close = document.querySelector("#close");
var lightBox = document.querySelector(".lightBox");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var currentIndex;
for (var i = 0; i < image.length; i++) {
  image[i].addEventListener("click", function (e) {
    // console.log(e.target);
    // e.target ==> image
    lightBoxContainer.classList.remove("d-none");
    lightBoxContainer.classList.replace("d-none", "d-flex");
    var MySRC = e.target.getAttribute("src");
    lightBox.style.backgroundImage = `url(${MySRC})`;

    currentIndex = image.indexOf(e.target);
    // console.log(currentIndex);
  });
}

close.addEventListener("click", function () {
  lightBoxContainer.classList.add("d-none");
  lightBoxContainer.classList.replace("d-flex", "d-none");
});
function slide(step) {
  // Step ===> 1  OR  -1
  currentIndex += step;
  if (currentIndex == image.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = image.length - 1;
  }
  var MySRC = image[currentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${MySRC})`;
}
/*
next.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex == image.length) {
    currentIndex = 0;
  }
  //   console.log(image[currentIndex]);
  var MySRC = image[currentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${MySRC})`;
});
prev.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = image.length - 1;
  }
  //   console.log(image[currentIndex]);
  var MySRC = image[currentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${MySRC})`;
});
*/
next.addEventListener("click", function () {
  slide(1);
});
prev.addEventListener("click", function () {
  slide(-1);
});
