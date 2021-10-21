let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
  numRows = numRows+1;
  let table = document.getElementById("grid");
  let row = table.insertRow();

  //code block for initlizing a table for the first time.
  if(numCols == 0){
    let cell1 = row.insertCell();
    numCols = 1;
    return
    }
  else{
    for(let i = 0; i< numCols; i++){
      let cell1 = row.insertCell(i);
      }
    }
}

//Add a column
function addC() {
  numCols = numCols+1;
  let table = document.getElementById("grid");

  //code block for initlizing a table for the first time.
  if(numRows == 0){
    let row = table.insertRow();
    let cell1 = row.insertCell();
    numRows =1;
    return
    }

  for(let i = 0; i< numRows; i++){
      let row = table.rows[i];
      let cell1 = row.insertCell();
    }
}

//Remove a row
function removeR() {
  //if the table is already empty do nothing.
  if(numRows == 0){
    return;
  }
  numRows = numRows-1;
  document.getElementById("grid").deleteRow(numRows);
}
//Remove a column
function removeC() {
  if(numCols == 0){
    return;
  }
  numCols = numCols-1;
  let table = document.getElementById("grid");
  for(let i = 0; i< numRows; i++){
      let row = table.rows[i];
      row.deleteCell(numCols);
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
