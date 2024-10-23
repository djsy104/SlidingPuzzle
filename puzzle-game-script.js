let rows = sessionStorage.getItem("rows");
let cols = sessionStorage.getItem("cols");
console.log(rows);  

document.addEventListener("DOMContentLoaded", function() {
  createBoard();  
  document.getElementById("start").innerText = rows + "x" + cols + " Start";
});

function createBoard() {
  document.getElementById("board").innerHTML = "";
  document.getElementById("board").style.width = (480 + (rows * 2) - 2) + "px";
  document.getElementById("board").style.height = (480 + (rows * 2) - 2) + "px";

  const tileWidth = 480 / cols;
  const tileHeight = 480 / rows;
  let tileNum = 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerHTML = tileNum;
      tileNum++;
      tile.style.width = tileWidth + "px";
      tile.style.height = tileHeight + "px";

      document.getElementById("board").appendChild(tile);
      console.log("created tile");
    }
  }
}