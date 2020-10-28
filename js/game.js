d3.select("#rightone")
    .on("click",function(){
d3.select("#correctone")
    .classed("righthidden",false);
d3.select("#buttid").classed("buttclass",false);
})

d3.select("#buttid").on("click",function(){
    d3.select("#ferrisid").classed("ferrisclass",false);
})

d3.select("#fwi").on("mouseenter",function(){
    d3.select("#fwi").attr("src","pics/thumb-down.jpg");
})

d3.select("#gijoe").on("click",function(){
    d3.select("#linkid").classed("linkclass",false);
})