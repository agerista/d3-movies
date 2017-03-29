// var quotes = [{
//     quote: "Go ahead, make my day.",
//     color: "red"
// }, {
//     quote: "I'll be back.",
//     color: "orange"
// }, {
//     quote: "May the Force be with you.",
//     color: "yellow"
// }, {
//     quote: "There's no place like home.",
//     color: "green"
// }, {
//     quote: "You're gonna need a bigger boat.",
//     color: "blue"
// }];

// d3.select("body")
//   .selectAll("p")
//   .data(quotes)
//   .enter()
//   .append("p")
//   .text(function(d) {
//     return d.quote;
//   })

//   .style('color', function(d) {
//     return d.color;
//   });

//   .style("font-size", function() {
//     return Math.round(((Math.random() * 20) + 10) + "px")
//   });

var width = 500;
var height = 500;
var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

var data = [[250, 250], [0, 0], [100, 150], [400, 200], [700, 250]];

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function(d) { return d[0]; })
  .attr('cy', function(d) { return d[1]; })
  .attr('r', function() { return 10; });

var xMin = d3.min(data, function(d) {
  return d[0];
});

var xMax = d3.max(data, function(d) {
  return d[0];
});

var yMin = d3.min(data, function(d) {
    return d[1];
});

var yMax = d3.max(data, function(d) {
    return d[1];
});

var padding = 10;

var xScale = d3.scaleLinear()
               .domain([xMin, xMax])
               .range([padding, width - padding]);

var yScale = d3.scaleLinear()
               .domain([yMin, yMax])
               .range([height - padding, padding]); 