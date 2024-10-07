//Where in the world

let mapCenter = [45, -93]
let zoomLevel = 4

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)


//How zoomed in/out are we?

//tiles - what makes up our map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(bridgeMap)

//when we have a set of objects, and they are all basically the same, its common
//to store as an array of objects
//all bridges have the same attributes (all have a name, a span, they are all bridges, etc.)

/*Verrazano-Narrows Bridge	New York, NY	1298.4	40.6066, -74.0447
Golden Gate Bridge	San Francisco and Marin, CA	1280.2	37.8199, -122.4783
Mackinac Bridge	Mackinaw and St Ignace, MI	1158.0	45.8174, -84.7278
George Washington Bridge	New York, NY and New Jersey, NJ	1067.0	40.8517, -73.9527
Tacoma Narrows Bridge	Tacoma and Kitsap, WA	853.44	47.2690, -122.5517 */



    let bridgeList = [
        {name: 'Verrazano-Narrows Bridge', location: 'New York, NY', span: '1298.4', coordinates: [40.6066, -74.0447] },
        {name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
        {name: 'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: '1158.0', coordinates: [45.8174, -84.7278] },
        {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span: '1067.0', coordinates: [40.8517, -73.9527]},
        {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span: '853.44', coordinates: [47.2690, -122.5517]}
    ]


    var longestBridge = 0
    bridgeList.forEach(function(bridgeObject) {  //function keeps track of what the longest bridge is
        let  bridgeSpan = bridgeObject.span
        console.log(bridgeSpan)
        if (longestBridge < Number(bridgeSpan)){  //We use the Number() function to convert the span from string to number.  This way we can check which span is the largest easier
            longestBridge = Number(bridgeSpan)  //if a new span is larger than the current longest span (starts at 0), it will get updated to the bigger number
        }
    })
    console.log(longestBridge)


bridgeList.forEach(function(bridgeObject) {

    let bridgeIcon = L.icon({  //L.Icon lets you use PNG instead of default map marker
        iconUrl : 'bridge.png',

        iconSize : [30, 30]
    })

    let redBridgeIcon = L.icon({
        iconUrl : 'red_bridge.png',
        iconSize : [30, 30]
    })



    let markerText = `${bridgeObject.name}<br>Span: ${bridgeObject.span}`
    let bridgeName = bridgeObject.name
    let bridgeCoorinates = bridgeObject.coordinates

    if (Number(bridgeObject.span) == longestBridge) {
        let bridgeMarker = L.marker(bridgeCoorinates, {icon: redBridgeIcon})
        .bindPopup(markerText)
        bridgeMarker.addTo(bridgeMap)
    } else {

    let bridgeMarker = L.marker(bridgeCoorinates, {icon : bridgeIcon})
    .bindPopup(markerText)
    bridgeMarker.addTo(bridgeMap)
    }
})