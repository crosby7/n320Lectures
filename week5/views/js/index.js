let bodyElement = document.querySelector("body");
let fixItElement = document.getElementById("fixIt");

// When button is clicked, change the background color if it is not already changed. If it is already changed, change it back to the original color.
fixItElement.addEventListener("click", function () {
  console.log("Button clicked!");
  // If it has been changed, change it back
  if (bodyElement.style.backgroundColor === "rgb(0, 0, 0)") {
    console.log("changing to default");
    bodyElement.style.backgroundColor = "#ddcccc";
    bodyElement.style.color = "#000000";
  }
  // else change it to black
  else {
    console.log("changing to black");
    bodyElement.style.backgroundColor = "#000000";
    bodyElement.style.color = "#FFFFFF";
  }
});
