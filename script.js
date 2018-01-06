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
var dataset = [];
var numDataPoints = 50;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for(var i = 0; i < numDataPoints ; i++){
  var newNum1 = Math.floor(Math.random() * xRange);
  var newNum2 = Math.floor(Math.random() * yRange);
  dataset.push([newNum1,newNum2])
}



var w = 500;
var h = 300;
var padding = 30

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


//axes
var xAxis = d3.axisBottom(xScale).ticks(5);

svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(0,"+(h-padding)+")")
  .call(xAxis);

var yAxis = d3.axisLeft(yScale);

svg.append("g")
  .attr("class","axis")
  .attr("transform","translate("+padding+",0)")
  .call(yAxis);

  
d3.select('body').append("p").text("clique aqui");
//quinto

var w = 600;
var h = 250;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
var xScale = d3.scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([0, w])
        .paddingInner(0.05);
var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, h]);

//Create SVG element
var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);
//Create bars
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return xScale(i);
    })
    .attr("y", function(d) {
        return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("fill", function(d) {
    return "rgb(0, 0, " + Math.round(d * 10) + ")";
    });
//Create labels
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
        return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr("y", function(d) {
        return h - yScale(d) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");

    var clicks = 0
d3.select('p').on("click",function() { 
  clicks++;
  
  if (clicks % 2 == 0) {
    dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
      11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  } else {
    dataset = [11,12,15,20,18,17,16,18,23,25,5,10,13,19,21,25,22,18,15,13]
  }


  svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(function(d, i) { return 1000 + i * 100; })
    .attr("y", function(d) {
      return h - yScale(d);
    })
    .attr("height", function(d) {
      return yScale(d);
    })
    .attr("fill", function(d) {
      return "rgb(0, 0, " + Math.round(d * 10) + ")";
    });

  svg.selectAll("text")
    .data(dataset)
    .transition()
    .duration(function(d, i) { return 1000 + i * 100; })
    .text(function(d) {
      return d;
    })
    .attr("x", function(d, i) {
      return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr("y", function(d) {
      return h - yScale(d) + 14;
    })

})