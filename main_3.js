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

 var data3 = [
  {group: "THQ", value: 72.9},
  {group: "Namco Bandai", value: 61.2},
  {group: "Nintendo", value: 53.4}
];

var data4 = [
  {group: "EA", value: 89.5},
  {group: "Nintendo", value: 85.3},
  {group: "Ubisoft", value: 44.7}
];

var data5 = [
  {group: "Nintendo", value: 427.2},
  {group: "Sony", value: 104.1},
  {group: "Sega", value: 60.8}
];

var data6 = [
  {group: "Nintendo", value: 151.3},
  {group: "EA", value: 145.8},
  {group: "Sony", value: 110.6}
];

var data7 = [
  {group: "Nintendo", value: 35.7},
  {group: "Ubisoft", value: 22.2},
  {group: "THQ", value: 19.98}
];

var data8 = [
  {group: "Activision", value: 299.9},
  {group: "EA", value: 158.2},
  {group: "Microsoft", value: 95.4}
];

var data9 = [
  {group: "Nintendo", value: 284.9},
  {group: "Square Enix", value: 97.1},
  {group: "Bethesda", value: 54.1}
];

var data10 = [
  {group: "Nintendo", value: 180.7},
  {group: "Ubisoft", value: 97.5},
  {group: "Sony", value: 80.8}
];

var data11 = [
  {group: "EA", value: 479.7},
  {group: "Nintendo", value: 218},
  {group: "Konami", value: 98.9}
];

var data12 = [
  {group: "Take-Two", value: 211.1},
  {group: "Ubisoft", value: 142.9},
  {group: "Activision", value: 142.3}
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
   .padding(0.2);

   var xAxis = svg3.append("g")
   .attr("transform", "translate(0," + height3 + ")")
     
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
    xAxis.call(d3.axisBottom(x3))

    
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


