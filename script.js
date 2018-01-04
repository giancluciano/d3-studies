var dataset = [5  ,10,15,20,25,22,12,14,23];
// primeiro grafico
d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class","bar")
  .style("height",function(d) {
    var barHeight = d * 5;
    return barHeight+"px"
  });


var w = 500;
var h = 100;
var padding = 1

// segundo grafico
var svg = d3.select("body").append("svg");
svg.attr("width",w).attr("height",h);

var circles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");

circles.attr("cx",function(d,i){
  return(i*50) + 25;
})
.attr("cy",h/2)
.attr("r",function(d){
  return d;
})
.attr("fill","green")
.attr("stroke","orange")
.attr("stroke-width",function(d){
  return d/3;
});

//terceiro
var svg = d3.select("body").append("svg");
svg.attr("width",w).attr("height",h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x",function(d,i){
    return i * (w/dataset.length);
  })
  .attr("y",function(d){
    return h-d*4;
  })
  .attr("width",w/dataset.length - padding)
  .attr("height",function(d){
    return d*4;
  })
  .attr("fill",function(d){
    return "rgb(0,0,"+(d*10)+")";
  });

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){
    return d;
  }).attr("x",function(d,i){
    return i * (w/dataset.length) + (w/dataset.length - padding)/2;
  })
  .attr("y",function(d){
    return h-d*4+14;
  })
  .attr("font-family","sans-serif")
  .attr("font-size","11px")
  .attr("fill","white")
  .attr("text-anchor","middle");




















  
// quarto
//variaveis
var dataset = [
  [5,20],
  [480,90],
  [250,50],
  [100,33],
  [330,95],
  [410,12],
  [475,44],
  [25,67],
  [85,21],
  [220,88],
  [600,150]
];
var w = 500;
var h = 300;
var padding = 20

//escalas
var xScale = d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){return d[0]})])
  .range([padding,w - padding * 2]);

var yScale = d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){return d[1]})])
  .range([h - padding,padding]);

var rScale = d3.scaleLinear()
.domain([0,d3.max(dataset,function(d){return d[1]})])
.range([2,5]);


//plotting
var svg = d3.select("body").append("svg");
svg.attr("width",w).attr("height",h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx",function(d){
  return xScale(d[0]);
})
.attr("cy",function(d){
  return yScale(d[1]);
})
.attr("r",function(d,i){
  return rScale(d[1]);
});

//texto
svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d){
  return d[0]+","+d[1];
})
.attr("x",function(d){
  return xScale(d[0]);
})
.attr("y",function(d){
  return yScale(d[1]);
})
.attr("font-family","sans-serif")
.attr("font-size","11px")
.attr("fill","red");

//axes
var xAxis = d3.axisBottom(xScale);

svg.append("g").attr("class","axis").call(xAxis);