// Ex 1
function insertRow() {

    let table = document.getElementById("sampleTable");
    let rowCount = table.rows.length + 1;
    let newRow = document.createElement("tr");

    let newCell1 = document.createElement("td");
    let newCell2 = document.createElement("td");

    newCell1.textContent = "Row" + rowCount + " cell1";
    newCell2.textContent = "Row" + rowCount + " cell2";

    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    
    table.appendChild(newRow);
}

