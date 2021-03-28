// Add your JavaScript code here
//const MAX_WIDTH = Math.max(1080, window.innerWidth);
//const MAX_HEIGHT = 720;
const margin = {top: 40, right: 100, bottom: 40, left: 175};
const NUM_EXAMPLES = 10

// Assumes the same graph width, height dimensions as the example dashboard. Feel free to change these if you'd like
//let graph_1_width = (MAX_WIDTH / 2) - 10, graph_1_height = 250;
//let graph_2_width = (MAX_WIDTH / 2) - 10, graph_2_height = 275;
//let graph_3_width = MAX_WIDTH / 2, graph_3_height = 575;

// Set up width and height for barplot
let width = 900,
    height = 350;

let svg = d3.select("#barplot")
    .append("svg")
    .attr("width", width)     // HINT: width
    .attr("height", height)     // HINT: height
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");    // HINT: transform

// Set up reference to count SVG group
let countRef = svg.append("g");


d3.csv("/data/video_games.csv").then(function(data) {

    data = cleanData(data, function(a, b) { return parseInt(b["Global_Sales"], 10) - parseInt(a["Global_Sales"], 10)}, NUM_EXAMPLES);

    let x = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => {return d.Global_Sales;})])
        .range([0, width - margin.left - margin.right]);

    let y = d3.scaleBand()
        .domain(data.map(d => d.Name))
        .range([0, height - margin.top - margin.bottom])
        .padding(0.1);  // Improves readability
 
    svg.append("g")
        .call(d3.axisLeft(y).tickSize(0).tickPadding(10));
    

    let bars = svg.selectAll("rect").data(data);

    // OPTIONAL: Define color scale
    let color = d3.scaleOrdinal()
        .domain(data.map(function(d) { return d["Name"] }))
        .range(d3.quantize(d3.interpolateHcl("#66a0e2", "#81c2c3"), NUM_EXAMPLES));


    bars.enter()
        .append("rect")
        .merge(bars)
        .attr("fill", function(d) { return color(d['Name']) }) // Here, we are using functin(d) { ... } to return fill colors based on the data point d
        .attr("x", x(0))
        .attr("y", (d) => {return y(d.Name);})               // HINT: Use function(d) { return ...; } to apply styles based on the data point (d)
        .attr("width", (d) => {return x(d.Global_Sales);})
        .attr("height",  y.bandwidth());        // HINT: y.bandwidth() makes a reasonable display height


    let counts = countRef.selectAll("text").data(data);

    // TODO: Render the text elements on the DOM
    counts.enter()
        .append("text")
        .merge(counts)
        .attr("x", (d) => {return 5 + x(d.Global_Sales);})       // HINT: Add a small offset to the right edge of the bar, found by x(d.count)
        .attr("y", (d) => {return 10 + y(d.Name);})       // HINT: Add a small offset to the top edge of the bar, found by y(d.artist)
        .style("text-anchor", "start")
        .text((d) => {return d.Global_Sales;});           // HINT: Get the count of the artist

    
    // TODO: Add x-axis label
    svg.append("text")
        .attr("transform", `translate(${margin.left + 130}, ${margin.top + 250})`)       // HINT: Place this at the bottom middle edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .text("Global_Sales (Millions)");
    
    // TODO: Add y-axis label
    svg.append("text")
        .attr("transform", `translate(${margin.right - 250}, ${margin.top + 100})`)       // HINT: Place this at the center left edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .text("Name");

    
    // TODO: Add chart title
    svg.append("text")
        .attr("transform", `translate(${margin.left + 130}, ${margin.top - 50})`)       // HINT: Place this at the top middle edge of the graph - use translate(x, y) that we discussed earlier
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Top 10 Global Video Game Sales");
    
    
});

const comp = function(a, b) {return a['Global_Sales'] - b['Global_Sales']};

function cleanData(data, comparator, numExamples) {
    // TODO: sort and return the given data with the comparator (extracting the desired number of examples)
    data.sort(comparator);
    
    data = data.slice(0,numExamples);
    data.map((d) => {
	d["Global_Sales"] = parseInt(d["Global_Sales"], 10)
    });
			
    return data;

}