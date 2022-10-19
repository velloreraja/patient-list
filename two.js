let middel = document.querySelector(".middel");
let backdrop = document.querySelector(".backdrop");

let emiddel = document.querySelector(".emiddel");
let ebackdrop = document.querySelector(".ebackdrop");

// this is to shows record Add Form
function addNewrecord() {
  middel.style.display = "block";
  backdrop.style.display = "block";
}
// (addRecord & Edit) Form Cancle button
function closeForm() {
  middel.style.display = "none";
  backdrop.style.display = "none";

  emiddel.style.display = "none";
  ebackdrop.style.display = "none";

  patientId.value = "";
  patientName.value = "";
  patientSurname.value = "";
  age.value = "";
  disease.value = "";
}
// Crossbar hide (Add Record Form & Update Form)
function crossClose() {
  middel.style.display = "none";
  backdrop.style.display = "none";

  //closeUpdateForm
  emiddel.style.display = "none";
  ebackdrop.style.display = "none";
}
// Edit record backdrop close
window.onclick = function (event1) {
  if (event1.target == ebackdrop) {
    ebackdrop.style.display = "none";
  } else if (event1.target === backdrop) {
    backdrop.style.display = "none";
  }
};

//patient form datails
let patientId = document.getElementById("patientid");
let patientName = document.getElementById("name");
let patientSurname = document.getElementById("surname");
let age = document.getElementById("age");
let disease = document.getElementById("disease");

let epatientId = document.getElementById("epatientid");
let epatientName = document.getElementById("ename");
let epatientSurname = document.getElementById("esurname");
let eage = document.getElementById("eage");
let edisease = document.getElementById("edisease");

//Add new Record
function saveForm() {
  let newRow = tableId.insertRow(tableId.length);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  cell1.innerHTML = patientId.value;
  cell2.innerHTML = patientName.value;
  cell3.innerHTML = patientSurname.value;
  cell4.innerHTML = age.value;
  cell5.innerHTML = disease.value;

  selectedRowInput();

  //from refresh after submit complete
  patientId.value = "";
  patientName.value = "";
  patientSurname.value = "";
  age.value = "";
  disease.value = "";
  middel.style.display = "none";
  backdrop.style.display = "none";
}

//Select The Table ROW For UPDATE DELETE Tables
let tableId = document.getElementById("tableId");
let rowindex;
function selectedRowInput() {
  for (let i = 0; i < tableId.rows.length; i++) {
    tableId.rows[i].onclick = function () {
      rowindex = this.rowIndex;
      epatientId.value = this.cells[0].innerHTML;
      epatientName.value = this.cells[1].innerHTML;
      epatientSurname.value = this.cells[2].innerHTML;
      eage.value = this.cells[3].innerHTML;
      edisease.value = this.cells[4].innerHTML;
      emiddel.style.display = "block";
      ebackdrop.style.display = "block";
    };
  }
}
selectedRowInput();

// Update Record
function updateRecord() {
  tableId.rows[rowindex].cells[0].innerHTML = epatientId.value;
  tableId.rows[rowindex].cells[1].innerHTML = epatientName.value;
  tableId.rows[rowindex].cells[2].innerHTML = epatientSurname.value;
  tableId.rows[rowindex].cells[3].innerHTML = eage.value;
  tableId.rows[rowindex].cells[4].innerHTML = edisease.value;
  document.querySelector(".emiddel").style.display = "none";
  document.querySelector(".ebackdrop").style.display = "none";
}
// Delete Record
function deleteRecord() {
  tableId.deleteRow(rowindex);
  //from refresh after Delete Record complete
  epatientId.value = "";
  epatientName.value = "";
  epatientSurname.value = "";
  eage.value = "";
  edisease.value = "";
  emiddel.style.display = "none";
  ebackdrop.style.display = "none";
}

// logout
function logout() {
  if (confirm("You want LOGOUT")) {
    location.href = "./index.html";
  }
}

function formRefresh() {
  patientId.value = "";
  patientName.value = "";
  patientSurname.value = "";
  age.value = "";
  disease.value = "";

  epatientId.value = "";
  epatientName.value = "";
  epatientSurname.value = "";
  eage.value = "";
  edisease.value = "";
}
