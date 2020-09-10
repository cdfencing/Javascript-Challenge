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
    let inputCity = d3.select("#cityname");
    let inputState = d3.select("#stateinitials");
    let inputCountry = d3.select("#country");
    let inputShape = d3.select("#shape");
    // Get the values
    let inputValueDate = inputDate.property("value").trim();
    let inputValueCity = inputCity.property("value").toLowerCase().trim();
    let inputValueState = inputState.property("value").toLowerCase().trim();
    let inputValueCountry = inputCountry.property("value").toLowerCase().trim();
    let inputValueShape = inputShape.property("value").toLowerCase().trim();


    let filteredDate = tableData.filter(tableData => tableData.datetime ===inputValueDate)
    let filteredCity = tableData.filter(tableData => tableData.city ===inputValueCity)
    let filteredState = tableData.filter(tableData => tableData.state ===inputValueState)
    let filteredAll = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.state ===inputValueState && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredCountry = tableData.filter(tableData => tableData.country ===inputValueCountry)
    let filteredShape = tableData.filter(tableData => tableData.shape ===inputValueShape)
    let filteredDCS = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.state ===inputValueState)
    let filteredDC = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity)
    let filteredDS = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.state ===inputValueState)
    let filteredCS = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.state ===inputValueState)
        
    
    //clear the table
    tbody.html("")

    let result = {
        filteredAll, filteredDCS, filteredDC, filteredDS, filteredCS, filteredDate, filteredCity, filteredState, filteredCountry,filteredShape
    }

    if (result.filteredAll.length !=0){
        buildTable(filteredAll);
    }
        else if (result.filteredDCS.length !=0){
            buildTable(filteredDCS);
        }
        else if(result.filteredDC.length !=0){
            buildTable(filteredDC);
        }
        else if(result.filteredDS.length !=0){
            buildTable(filteredDS)
        }
        else if(result.filteredCS.length !=0){
            buildTable(filteredCS)
        }
        else if(filteredDate.length !=0){
            buildTable(filteredDate)
        }
        else if(filteredCity.length !=0){
            buildTable(filteredCity)
        }
        else if(filteredState.length !=0){
            buildTable(filteredState)
        }
        else if(filteredCountry.length !=0){
            buildTable(filteredCountry)
        }
        else if(filteredShape.length !=0){
            buildTable(filteredShape)
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