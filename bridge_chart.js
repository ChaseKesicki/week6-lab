let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

let bridgeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [
            {
                label: 'Bridge length',
                data: [],
                backgroundColor: [],
            }
        ],
        labels : []
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero : true
                }
            }]
        }
    }
})

let bridgeList = [  //array that will be used to input data
    {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447] },
    {name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
    {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: '1158.0', coordinates: [45.8174, -84.7278] },
    {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span: '1067.0', coordinates: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span: '853.44', coordinates: [47.2690, -122.5517]}
]

let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

function addBridgeToChart(name, length) {  //function formats and enters data into the chart

    bridgeChart.data.labels.push(name)
    bridgeChart.data.datasets[0].data.push(length)

    let colorCount = bridgeChart.data.datasets[0].backgroundColor.length
    let color = chartColors[ colorCount % chartColors.length ]

    bridgeChart.data.datasets[0].backgroundColor.push(color)
    bridgeChart.update()
}



bridgeList.forEach(function(bridgeObject){  //goes through each item in array and adds them to chart
    let bridgeName = bridgeObject.name
    console.log(bridgeName)
    let bridgeLength = Number(bridgeObject.span)
    console.log(bridgeLength)

    addBridgeToChart(bridgeName, bridgeLength)
})
