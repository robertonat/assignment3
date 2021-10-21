let numRows = 0;
let numCols = 0;
let colorSelected;

//function for initilizing onclick and cell color to clean up code
function fillCell(cell1){
  cell1.style.backgroundColor = "white";
  cell1.setAttribute("onclick","this.style.backgroundColor = colorSelected");
};

//Add a row
function addR() {
  numRows = numRows+1;
  let table = document.getElementById("grid");
  let row = table.insertRow();

  //code block for initlizing a table for the first time with numCols equal to zero.
  if(numCols == 0){
    let cell1 = row.insertCell();
    fillCell(cell1);
    numCols = 1;
    return
    }
  //if table already exists then add cells until a new row is created
  else{
    for(let i = 0; i< numCols; i++){
      let cell1 = row.insertCell();
      fillCell(cell1);
      }
    }
}

//Add a column
function addC() {
  numCols = numCols+1;
  let table = document.getElementById("grid");

  //code block for initlizing a table for the first time with zero numRow value
  if(numRows == 0){
    let row = table.insertRow();
    let cell1 = row.insertCell();
    fillCell(cell1);
    numRows =1;
    return
    }
  //iterate through each row and add one cell each to creat a new column
  for(let i = 0; i< numRows; i++){
      let row = table.rows[i];
      let cell1 = row.insertCell();
      fillCell(cell1);
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
  if(numRows == 0){numCols = 0;}
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
    if(numCols == 0){
      numRows = 0;
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}
//iterates through table to turn all the cells color to the color selected
function fill(){
  let x = document.getElementById("grid").getElementsByTagName("td");
  for(let i = 0; i< x.length; i++){
     x[i].style.backgroundColor = colorSelected;
   }
}
//iterates through table to turn all the cells colors to white
function clearAll(){
  let x = document.getElementById("grid").getElementsByTagName("td");
  for(let i = 0; i< x.length; i++){
     x[i].style.backgroundColor = "white";
   }
}

//iterates through the table and turns all white cells to the color selected
function fillU(){
  let x = document.getElementById("grid").getElementsByTagName("td");
  for(let i = 0; i< x.length; i++){
     if(x[i].style.backgroundColor == "white"){
        x[i].style.backgroundColor = colorSelected;
     }
   }
}

//a fun extra surpise
function surprise(){
  if(numCols > 0 || numRows > 0){
    while(numCols>0){
      removeC();
      }
    while(numRows>0){
      removeR();
        }
  }

  for(let i = 0; i< 6; i++){
    addR();
    addC();
    }

  const holder = colorSelected; // holds the color selected before pressing the surprise button
  colorSelected = "yellow"
  fill();
  let x = document.getElementById("grid").getElementsByTagName("td");
  x[0].style.backgroundColor = "blue";
  x[6].style.backgroundColor = "blue";
  x[9].style.backgroundColor = "blue";
  x[11].style.backgroundColor = "blue";
  x[22].style.backgroundColor = "blue";
  x[26].style.backgroundColor = "blue";
  x[30].style.backgroundColor = "blue";
  x[31].style.backgroundColor = "blue";
  x[32].style.backgroundColor = "blue";
  colorSelected = holder; //puts back the color selected so it is consistent with what is on the drop down menu
  }
