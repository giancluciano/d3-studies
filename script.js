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

  






var p1 = d3.select('body').append("p").text("clique aqui");
//quinto

var g5_w = 600;
var g5_h = 250;

var g5_dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
var g5_xScale = d3.scaleBand()
        .domain(d3.range(g5_dataset.length))
        .rangeRound([0, w])
        .paddingInner(0.05);
var g5_yScale = d3.scaleLinear()
        .domain([0, d3.max(g5_dataset)])
        .range([0, g5_h]);

//Create SVG element
var g5_svg = d3.select("body")
      .append("svg")
      .attr("width", g5_w)
      .attr("height", g5_h);
//Create bars
g5_svg.selectAll("rect")
    .data(g5_dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return g5_xScale(i);
    })
    .attr("y", function(d) {
        return h - g5_yScale(d);
    })
    .attr("width", g5_xScale.bandwidth())
    .attr("height", function(d) {
        return g5_yScale(d);
    })
    .attr("fill", function(d) {
    return "rgb(0, 0, " + Math.round(d * 10) + ")";
    });
//Create labels
g5_svg.selectAll("text")
    .data(g5_dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
        return g5_xScale(i) + g5_xScale.bandwidth() / 2;
    })
    .attr("y", function(d) {
        return h - g5_yScale(d) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");

    
  p1.on("click",function() { 

  var g5_numValues = g5_dataset.length;

  g5_dataset = [];

  g5_maxValue = 100;

  for (var i = 0; i < g5_numValues; i++) {
    var g5_newNumber = Math.floor(Math.random()*g5_maxValue);
    
    g5_dataset.push(g5_newNumber);
  }

  var g5_yScale = d3.scaleLinear()
        .domain([0,d3.max(g5_dataset)])
        .range([0,h]);

  var g5_colorScale = d3.scaleLinear()
        .domain([0,d3.max(g5_dataset)])
        .range([0,25]);

  g5_svg.selectAll("rect")
    .data(g5_dataset)
    .transition()
    .duration(function(d, i) { return 1000 + i * 100; })
    .attr("y", function(d) {
      return h - g5_yScale(d);
    })
    .attr("height", function(d) {
      return g5_yScale(d);
    })
    .attr("fill", function(d) {
      return "rgb(0, 0, " + Math.round(g5_colorScale(d) * 10) + ")";
    });

  g5_svg.selectAll("text")
    .data(g5_dataset)
    .transition()
    .duration(function(d, i) { return 1000 + i * 100; })
    .text(function(d) {
      return d;
    })
    .attr("x", function(d, i) {
      return g5_xScale(i) + g5_xScale.bandwidth() / 2;
    })
    .attr("y", function(d) {
      return h - g5_yScale(d) + 14;
    })

})



//sexto

var p2 = d3.select('body').append("p").text("clique aqui");


//Width and height
var g6_w = 500;
var g6_h = 300;
var g6_padding = 30;

//Dynamic, random dataset
var g6_dataset = [];											//Initialize empty array
var g6_numDataPoints = 50;										//Number of dummy data points to create
var g6_maxRange = Math.random() * 1000;						//Max range of new values
for (var i = 0; i < g6_numDataPoints; i++) {					//Loop numDataPoints times
  var g6_newNumber1 = Math.floor(Math.random() * g6_maxRange);	//New random integer
  var g6_newNumber2 = Math.floor(Math.random() * g6_maxRange);	//New random integer
  g6_dataset.push([g6_newNumber1, g6_newNumber2]);					//Add new number to array
}
//Create scale functions
var g6_xScale = d3.scaleLinear()
           .domain([0, d3.max(g6_dataset, function(d) { return d[0]; })])
           .range([g6_padding, g6_w - g6_padding * 2]);
var g6_yScale = d3.scaleLinear()
           .domain([0, d3.max(g6_dataset, function(d) { return d[1]; })])
           .range([g6_h - g6_padding, g6_padding]);
//Define X axis
var g6_xAxis = d3.axisBottom()
          .scale(g6_xScale)
          .ticks(5);
//Define Y axis
var g6_yAxis = d3.axisLeft()
          .scale(g6_yScale)
          .ticks(5);
//Create SVG element
var g6_svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

//create clipPath

g6_svg.append("clipPath")
      .attr("id","chart-area")
      .append("rect")
      .attr("x",g6_padding)
      .attr("y",g6_padding)
      .attr("width",g6_w - g6_padding *3)
      .attr("height",g6_h,g6_padding *2)

//Create circles
g6_svg.append("g")
    .attr("id","circles")
    .attr("clip-path","url(#chart-area)")
    .selectAll("circle")
    .data(g6_dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return g6_xScale(d[0]);
    })
    .attr("cy", function(d) {
      return g6_yScale(d[1]);
    })
    .attr("r", 2);

//Create X axis
g6_svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + (g6_h - g6_padding) + ")")
  .call(g6_xAxis);

//Create Y axis
g6_svg.append("g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + g6_padding + ",0)")
  .call(g6_yAxis);
//On click, update with new data			
p2.on("click", function() {
    //New values for dataset
    var g6_numValues = g6_dataset.length;						 		//Count original length of dataset
    var g6_maxRange = Math.random() * 1000;						//Max range of new values
    g6_dataset = [];  						 				 		//Initialize empty array
    for (var i = 0; i < g6_numValues; i++) {				 		//Loop numValues times
      var g6_newNumber1 = Math.floor(Math.random() * g6_maxRange);	//New random integer
      var g6_newNumber2 = Math.floor(Math.random() * g6_maxRange);	//New random integer
      g6_dataset.push([g6_newNumber1, g6_newNumber2]);					//Add new number to array
    }

    //update x-axis
    g6_svg.select(".x.axis")
      .transition()
      .duration(1000)
      .call(g6_xAxis);

    
    //update y-axis
    g6_svg.select(".y.axis")
      .transition()
      .duration(1000)
      .call(g6_yAxis);
    
    //Update scale domains
    g6_xScale.domain([0, d3.max(g6_dataset, function(d) { return d[0]; })]);
    g6_yScale.domain([0, d3.max(g6_dataset, function(d) { return d[1]; })]);
    //Update all circles
    g6_svg.selectAll("circle")
        .data(g6_dataset)
        .transition()
        .duration(1000)
        .on("start",function() { d3.select(this).attr("fill","magenta").attr("r",3) })
        .attr("cx", function(d) {
          return g6_xScale(d[0]);
        })
        .attr("cy", function(d) {
          return g6_yScale(d[1]);
        })
        .on("end",function() { d3.select(this).transition().attr("fill","black").attr("r",2) });
  });
