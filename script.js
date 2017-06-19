/* global d3 */

// Our canvas
const width = 750,
  height = 300,
  margin = 20
  marginLeft = 40



// Drawing area
let svg = d3.select('#results')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

// Data reloading
let reload = () => {
  // Your data parsing here...
  d3.tsv('afcw-results.tsv', (rows)=>{
    // console.log(rows);
      redraw(rows)
  })
}

// redraw function
let redraw = (data) => {
  // Your data to graph here
  console.log(data);

  var yScale = d3.scaleLinear()
    .domain([0, 6])
    .range([0, 300])

  var x_axis = d3.axisBottom()
  .scale(yScale)

  svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', (d,i) =>{
    return i*12
  })
  .attr('y', (d)=>{
    return height - yScale(d.GoalsScored)
  })
  .attr('width', 10)
  .attr('height', (d)=>{
    return d.GoalsScored * 50
  })
  .attr('fill', 'red')

svg
  .append('g')
  .call(x_axis)
}

reload()
