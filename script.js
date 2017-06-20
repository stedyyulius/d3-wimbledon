/* global d3 */

// Our canvas
const width = 750,
  height = 300,
  margin = 20
marginLeft = 40

// Drawing area
var svg = d3.select('#results')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style(`background`,`#cacaca`)
  
  

// Data reloading
function reload() {
  d3.tsv(`afcw-results.tsv`,(rows)=>{
   redraw(rows)
  })  
}


  
// redraw function
function redraw(data) {
  const yScale = d3.scaleLinear()
    .domain([0,d3.max(d3.map(dataItem=>dataItem.GoalsScored))])
    .range([0,height])
    
  svg.selectAll(`rect`)
    .data(data)
    .enter()
    .append(`rect`)
    .attr(`class`,`bar`)
    .attr(`fill`,`green`)
    .attr(`x`,(d,i)=>{
      return i * 22
    })
    .attr(`y`,(d,i)=>{
      return height - yScale(d) - margin
    })
    .attr(`width`,20)
    .attr(`height`,(d)=>{
      return yScale(d.GoalsScored)
    })
    // console.log(data);
}

reload()
