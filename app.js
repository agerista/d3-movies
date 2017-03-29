var quotes = [{
    quote: "Go ahead, make my day.",
    color: "red"
}, {
    quote: "I'll be back.",
    color: "orange"
}, {
    quote: "May the Force be with you.",
    color: "yellow"
}, {
    quote: "There's no place like home.",
    color: "green"
}, {
    quote: "You're gonna need a bigger boat.",
    color: "blue"
}];

d3.select("body")
  .selectAll("p")
  .data(quotes)
  .enter()
  .append("p")
  .text(function(d) {
    return d.quote;
  })

  .style('color', function(d) {
    return d.color;
  });

  .style("font-size", function() {
    return Math.round(((Math.random() * 20) + 10) + "px")
  });

