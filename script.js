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
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
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
