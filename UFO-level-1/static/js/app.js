// from data.js
let tableData = data;
console.log(tableData);

let tbody = d3.select("tbody");

function buildTable(tableData){
    //clear the table if has data
    tbody.html("")
    //loop thru the data
    tableData.forEach(dataEntry =>{
        let row = tbody.append("tr");
        Object.entries(dataEntry).forEach(([key,value])=>{
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

let button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select input
    let inputDate = d3.select("#datetime");

    // Get the values
    let inputValueDate = inputDate.property("value").trim();

    let filteredDate = tableData.filter(tableData => tableData.datetime ===inputValueDate)
        
    
    //clear the table
    tbody.html("")

    let result = {
        filteredAll, filteredDCS, filteredDC, filteredDS, filteredCS, filteredDate, filteredCity, filteredState, filteredCountry,filteredShape
    }

    if (filteredDate.length !=0){
            buildTable(filteredDate)

        }
        else {
            tbody.append("tr").append("td").text("No filter try something else")
        }

});

buildTable(tableData);

let resetButton = d3.select("#reset-btn")
resetButton.on("click", function(){
    tbody.html("")
    buildTable(tableData)
});