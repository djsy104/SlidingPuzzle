let rows = 3;
let cols = 3;

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("easy")) {
    document.getElementById("easy").addEventListener("click", function() {
      rows = 3;
      cols = 3;
    });

    document.getElementById("medium").addEventListener("click", function() {
      rows = 4;
      cols = 4;
    });
    
    document.getElementById("hard").addEventListener("click", function() {
      rows = 5;
      cols = 5;
    });
  }

  if (document.getElementById("board")) {
    createBoard();
  }
});

/*document.getElementById("start").addEventListener("click", function() {
  createBoard();
});*/

function createBoard() {
  document.getElementById("board").innerHTML = "";
  document.getElementById("board").style.width = (480 + (rows * 2) - 2) + "px";
  document.getElementById("board").style.height = (480 + (rows * 2) - 2) + "px";

  const tileWidth = 480 / cols;
  const tileHeight = 480 / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.style.width = tileWidth + "px";
      tile.style.height = tileHeight + "px";

      document.getElementById("board").appendChild(tile);
      console.log("created tile");
    }
  }
}