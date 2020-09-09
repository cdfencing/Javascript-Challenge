// from data.js
let tableData = data;
console.log(tableData);

// Get a reference to the table body
let tbody = d3.select("tbody");

// get the UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append table row `tr` for each UFO Sighting 
    let row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);

      let cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
let button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select input date
    let inputElement = d3.select("#datetime");
    // Get the values
    let inputValue = inputElement.property("value");
    
    console.log(inputValue);
    // Filter the data
    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append table row `tr` for each UFO Sighting 
    let row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        
        let cell = row.append("td");
        cell.text(value);
    });
});
});