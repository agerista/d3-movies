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

var data = movies;

var colorScale = d3.scaleLinear()
                   .domain([0,1])
                   .range(['red', 'green']);

var xMin = d3.min(data, function(d) {
  return d.daysOpen;
});

var xMax = d3.max(data, function(d) {
  return d.daysOpen;
});

var yMin = d3.min(data, function(d) {
    return d.total;
});

var yMax = d3.max(data, function(d) {
    return d.total;
});

var padding = 10;

var xScale = d3.scaleLinear()
               .domain([xMin, xMax])
               .range([padding, width - padding]);

var yScale = d3.scaleLinear()
               .domain([yMin, yMax])
               .range([height - padding, padding]);

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function(d) { return xScale(d.daysOpen); })
  .attr('cy', function(d) { return yScale(d.total); })
  .attr('r', function(d) { return 5 * d.total / d.openingTotal; })
  .attr('fill', function(d) { return colorScale(d.freshness); })
  .attr('stroke', 'black');
    return color(d.freshness);