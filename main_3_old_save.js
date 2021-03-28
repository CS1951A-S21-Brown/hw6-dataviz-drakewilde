    // create 2 data_set
var data1 = [
    {group: "Nintendo", value: 124.8},
    {group: "Atari", value: 21.5},
    {group: "THQ", value: 9.25}
 ];
 
 var data2 = [
    {group: "Nintendo", value: 27.3},
    {group: "Activision", value: 17.7},
    {group: "EA", value: 14.07}
 ];
 
 // set the dimensions and margins of the graph
 var margin3 = {top: 30, right: 30, bottom: 70, left: 150},
     width3 = 560 - margin3.left - margin3.right,
     height3 = 400 - margin3.top - margin3.bottom;
 
 // append the svg object to the body of the page
 var svg3 = d3.select("#graph3")
   .append("svg")
     .attr("width", width3 + margin3.left + margin3.right)
     .attr("height", height3 + margin3.top + margin3.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin3.left + "," + margin3.top + ")");
 
 // X axis
 var x3 = d3.scaleBand()
   .range([ 0, width3 ])
   .domain(data1.map(function(d) { return d.group; }))
   .padding(0.2);
 svg3.append("g")
   .attr("transform", "translate(0," + height3 + ")")
   .call(d3.axisBottom(x3))
    
    svg3.append("text")
    .attr("transform", `translate(${margin3.left + 50}, ${margin3.top + 300})`)
    .style("text-anchor", "middle")
    .text("Publisher")

 
 // Add Y axis
 var y3 = d3.scaleLinear()
   .domain([0, 480])
   .range([ height3, 0]);
 svg3.append("g")
   .attr("class", "myYaxis")
   .call(d3.axisLeft(y3));

   svg3.append("text")
    .attr("transform", `translate(${margin3.right - 110}, ${margin3.top + 150})`)
    .style("text-anchor", "middle")
    .text("Global Sales (M)")


 
 // A function that create / update the plot for a given variable:
 function update(data) {
    
    x3.domain(data.map(function(d) { return d.group; }))
    svg3.append("g")
   .attr("transform", "translate(0," + height3 + ")")
   .call(d3.axisBottom(x3))
    
    svg3.append("text")
    .attr("transform", `translate(${margin3.left + 50}, ${margin3.top + 300})`)
    .style("text-anchor", "middle")
    .text("Publisher")
    
    var u = svg3.selectAll("rect")
     .data(data)
   u
     .enter()
     .append("rect")
     .merge(u)
     .transition()
     .duration(1000)
       .attr("x", function(d) { return x3(d.group); })
       .attr("y", function(d) { return y3(d.value); })
       .attr("width", x3.bandwidth())
       .attr("height", function(d) { return height3 - y3(d.value); })
       .attr("fill", "#69b3a2")
       
       
 }
 
 // Initialize the plot with the first dataset
 update(data1)


