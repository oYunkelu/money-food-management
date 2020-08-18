// ----------------------------------------------------------------------
//  bar_graph.js
//
//                  May/16/2017
// ------------------------------------------------------------------
jQuery (function ()
{
    let config = {
        type: 'bar',
        data: barChartData,
        responsive : true
        }

    let context = jQuery("#chart")
    let chart = new Chart(context,config)
})

// ----------------------------------------------------------------------
let barChartData = {
    labels : ["青森","岩手","秋田","宮城","山形","福島"],
    datasets : [
        {
        label: "1年目",
        backgroundColor: "rgba(179,181,198,0.5)",
        data : [25,45,5,20,19,33]
        },
        {
        label: "2年目",
        backgroundColor: "rgba(255,99,132,0.5)",
        data : [10,54,77,32,9,78]
        }
    ]
}

// ----------------------------------------------------------------------