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
    let filteredCountry = tableData.filter(tableData => tableData.country ===inputValueCountry)
    let filteredShape = tableData.filter(tableData => tableData.shape ===inputValueShape)
    let filteredAll = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.state ===inputValueState && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredDStCoSh = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.state ===inputValueState && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredDCiStCo = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.state ===inputValueState && tableData.country ===inputValueCountry)
    let filteredDCiStSh = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.state ===inputValueState && tableData.shape ===inputValueShape)
    let filteredDCiCoSt = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.country ===inputValueCountry && tableData.state ===inputValueState)
    let filteredDCiCoSh = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredCiStCoSh = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.state ===inputValueState && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredDCiSt = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.state ===inputValueState)
    let filteredDCiCo = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.country ===inputValueCountry)
    let filteredDCiSh = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity && tableData.shape ===inputValueShape)
    let filteredDStCo = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.state ===inputValueState && tableData.country ===inputValueCountry)
    let filteredDCoSh = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredDStSh = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.state ===inputValueState && tableData.shape ===inputValueShape)
    let filteredCiStCo = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.state ===inputValueState && tableData.country ===inputValueCountry)
    let filteredCiStSh = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.state ===inputValueState && tableData.shape ===inputValueShape)
    let filteredCiCoSt = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.country ===inputValueCountry && tableData.state ===inputValueState)
    let filteredCiCoSh = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredStCoSh = tableData.filter(tableData => tableData.state ===inputValueState && tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
    let filteredDCi = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.city ===inputValueCity)
    let filteredDSt = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.state ===inputValueState)
    let filteredCiSt = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.state ===inputValueState)
    let filteredDSh = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.shape ===inputValueShape)
    let filteredDCo = tableData.filter(tableData => tableData.datetime ===inputValueDate && tableData.country ===inputValueCountry)
    let filteredCiCo = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.country ===inputValueCountry)
    let filteredCiSh = tableData.filter(tableData => tableData.city ===inputValueCity && tableData.shape ===inputValueShape)
    let filteredStCo = tableData.filter(tableData => tableData.state ===inputValueState && tableData.country ===inputValueCountry)
    let filteredStSh = tableData.filter(tableData => tableData.state ===inputValueState && tableData.shape ===inputValueShape)
    let filteredCoSh = tableData.filter(tableData => tableData.country ===inputValueCountry && tableData.shape ===inputValueShape)
        
    //clear the table
    tbody.html("")

    let result = {
        filteredAll, filteredDStCoSh, filteredDCiStCo, filteredDCiStSh, filteredDCiCoSt, filteredDCiCoSh, filteredCiStCoSh, 
        filteredDCiSt, filteredDCiCo, filteredDCiSh, filteredDStCo, filteredDCoSh, filteredDStSh, filteredCiStCo, filteredCiStSh, filteredCiCoSt, filteredCiCoSh, filteredStCoSh,
        filteredDCi, filteredDSt, filteredCiSt, filteredDSh, filteredDCo, filteredCiCo, filteredCiSh, filteredStCo, filteredStSh, filteredCoSh,
        filteredDate, filteredCity, filteredState, filteredCountry,filteredShape
    }

    if (result.filteredAll.length !=0){
        buildTable(filteredAll);
    }
        else if (result.filteredDStCoSh.length !=0){
        buildTable(filteredDStCoSh);
        }
        else if (result.filteredDCiStCo.length !=0){
            buildTable(filteredDCiStCo);
        }
        else if (result.filteredDCiStSh.length !=0){
            buildTable(filteredDCiStSh);
        }
        else if (result.filteredDCiCoSt.length !=0){
            buildTable(filteredDCiCoSt);
        }
        else if (result.filteredDCiCoSh.length !=0){
            buildTable(filteredDCiCoSh);
        }
        else if (result.filteredCiStCoSh.length !=0){
            buildTable(filteredCiStCoSh);
        }
        else if (result.filteredDCiSt.length !=0){
            buildTable(filteredDCiSt);
        }        
        else if (result.filteredDCiCo.length !=0){
            buildTable(filteredDCiCo);
        }
        else if (result.filteredDCiSh.length !=0){
            buildTable(filteredDCiSh);
        }
        else if (result.filteredDStCo.length !=0){
            buildTable(filteredDStCo);
        }
        else if (result.filteredDCoSh.length !=0){
            buildTable(filteredDCoSh);
        }
        else if (result.filteredDStSh.length !=0){
            buildTable(filteredDStSh);
        }
        else if (result.filteredCiStCo.length !=0){
            buildTable(filteredCiStCo);
        }
        else if (result.filteredCiStSh.length !=0){
            buildTable(filteredCiStSh);
        }
        else if (result.filteredCiCoSt.length !=0){
            buildTable(filteredCiCoSt);
        }
        else if (result.filteredCiCoSh.length !=0){
            buildTable(filteredCiCoSh);
        }
        else if (result.filteredStCoSh.length !=0){
            buildTable(filteredStCoSh);
        }
        else if(result.filteredDCi.length !=0){
            buildTable(filteredDCi);
        }
        else if(result.filteredDSt.length !=0){
            buildTable(filteredDSt)
        }
        else if(result.filteredCiSt.length !=0){
            buildTable(filteredCiSt)
        }
        else if (result.filteredDSh.length !=0){
            buildTable(filteredDSh);
        }
        else if (result.filteredDCo.length !=0){
            buildTable(filteredDCo);
        }
        else if (result.filteredCiCo.length !=0){
            buildTable(filteredCiCo);
        }
        else if (result.filteredCiSh.length !=0){
            buildTable(filteredCiSh);
        }
        else if (result.filteredStCo.length !=0){
            buildTable(filteredStCo);
        }
        else if (result.filteredStSh.length !=0){
            buildTable(filteredStSh);
        }
        else if (result.filteredCoSh.length !=0){
            buildTable(filteredCoSh);
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
            tbody.append("tr").append("td").text("No data available, try something else")
        }

});


buildTable(tableData);

let resetButton = d3.select("#reset-btn")
resetButton.on("click", function(){
    tbody.html("")
    buildTable(tableData)
});