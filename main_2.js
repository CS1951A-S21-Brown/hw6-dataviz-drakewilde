var svg1 = d3.select("#graph2").append("svg")
.attr("width", 1000).attr("height", 500)
    
    var projection = d3.geoEqualEarth();

    var path = d3.geoPath()
      .projection(projection);
    
    var url = "http://enjalot.github.io/wwsd/data/world/world-110m.geojson";
    var url2 = "http://enjalot.github.io/wwsd/data/world/ne_50m_populated_places_simple.geojson";
    Promise.all([d3.json(url), d3.json(url2)]).then(function(data) {
      var places_geojson = data[1];
      var world_geojson = data[0];

      var markers = [
          {x : 260, y: 140, name: 'US', sales: 877, genre: 'Action'},
          {x : 380, y: 130, name: 'EU', sales: 524, genre: 'Action'},
          {x : 500, y: 140, name: 'JP', sales: 352, genre: 'Role-Playing'}
      ]
      
      var Tooltip = d3.select("#graph2")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 1)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
     
      

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      Tooltip.style("opacity", 1)
    }
    var mousemove = function(d) {
      Tooltip
        .html(d.name + "<br>" + "sales (Millions): " + d.sales + "<br>" + "Genre: " + d.genre)
        .style("left", (event.pageX) + "px" )
        .style("top", (event.pageY - 110) + "px")
    }
    var mouseleave = function(d) {
      Tooltip.style("opacity", 0)
    }

      	svg1.append("path")
        	.attr("d", path(world_geojson))
					.attr("fill","lightgray")
        
        svg1.selectAll("circle")
          .data(markers)
        .enter()
      		.append("circle")
      		.attr("id", "circleBasicTooltip")
            .attr("cx", function(d){return projection([d.x, d.y])[0]})
            .attr("cy", function(d){return projection([d.x, d.y])[1]})
            .attr("r", 30)
            .attr("fill", "#69b3a2")
            .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
        		
    })

