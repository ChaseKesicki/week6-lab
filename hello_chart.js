let canvas = document.querySelector('#soda-chart')
let ctx = canvas.getContext('2d')

let chart = new Chart(ctx, {
    type: 'bar',  //Type changes how the graph is displayed
    data: {
        labels: ['Coke', 'Pepsi', 'Sprite', 'Either', 'Neither'],  //this will be the names for all the listed items
        datasets: [ {
            label: 'Number of votes', //Label for the bar graph
            data : [18, 14, 10, 7, 10],  //data that will correspond with the names inputed earlier
            backgroundColor: ['green', 'blue', 'yellowgreen', 'red', 'yellow']  //each item will have its own unique color
        }]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero : true  //Makes sure the graph starts at 0, so its easier to compare each item
                }
            }]
        }
    }
})