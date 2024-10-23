document.getElementById("easy").addEventListener("click", function() {
  sessionStorage.setItem("rows", 3);
  sessionStorage.setItem("cols", 3);
  console.log("easy clicked");
});

document.getElementById("medium").addEventListener("click", function() {
  sessionStorage.setItem("rows", 4);
  sessionStorage.setItem("cols", 4);
});

document.getElementById("hard").addEventListener("click", function() {
  sessionStorage.setItem("rows", 5);
  sessionStorage.setItem("cols", 5);
});