var margin = { top: 10, right: 20, bottom: 30, left: 30 };
var width = 1000 - margin.left - margin.right;
var height = 565 - margin.top - margin.bottom;

var svg = d3.select(".chart")
  .append("svg")
  .attr("width", width + 20 + margin.left + margin.right)
  .classed("info", true)
  .attr('overflow', 'visible')
  .attr("height", height + 200 + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(100, " + margin.top + ")");
