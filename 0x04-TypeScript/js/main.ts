interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }
 
const student1: Student = {
  firstName: "LeBron",
  lastName: "King",
  age: 39,
  location: "LA Lakers"
  };

const student2: Student = {
  firstNAme: "Christiano",
  lastName: "Ronaldo",
  age: 39;
  location: "Lisbon"
  };

const studentList: Student[] = [student1, student2];

const body : HTMLBodyElement = document.getElementsByTagName("body")[0];
const table : HTMLTableElement = document.createElement("table");
const thead : HTMLTableSectionElement = document.createElement("thead");
const tbody : HTMLTableSectionElement = document.createElement("tbody");
const rowHead : HTMLTableRowElement = thead.insertRow(0);
const Cell1Head : HTMLTableCellElement = rowHead.insertCell(0);
const Cell2Head : HTMLTableCellElement = rowHead.insertCell(1);

CellHead1.innerHTML = "firstName";
CellHead2.innerHTML = "location";
table.append(thead);

studentlist.forEach(student => {
  const row : HTMLTableRowElement = tbody.insertRow(0);
  const Cell1 : HTMLTableCellElement = row.insertCell(0);
  const Cell2 : HTMLTableCellElement = row.insertCell(1);

  Cell1.innerHTML = student.firstName;
  Cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
