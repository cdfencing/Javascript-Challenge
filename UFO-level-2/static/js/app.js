// from data.js
let tableData = data;
console.log(tableData);

let tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row
    let row = tbody.append("tr");

    // console.log for per UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      
      let cell = row.append("td");
      cell.text(value);
    });
  });

// button
let button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select input
    let inputElement = d3.select("#input");
    // Get the values
    let inputValue = inputElement.property("value");

    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    
    console.log(filteredData);

    filteredData.forEach(function(selections) {

    console.log(selections);
    
    let row = tbody.append("tr");
   
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        
        let cell = row.append("td");
        cell.text(value);
    });
});
});
