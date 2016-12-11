
var apiKEY = "AIzaSyCFhBNWfCpe7ndsc3oXjbXactN1bjzjqAM";
var spreadsheetID = "12RAs7VeT9vcm38JlTfO52rpGgrCQDNBapsw3Q7z5qXs";

function parseData(values){

    var numberOnes = [2, 6, 7];

    var obj = {
        "type": "FeatureCollection",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": []
    };

    var properties = values[0];
    for (var i=1; i < values.length; i++){
        var row = values[i];
        var props = {}
        for (var j=0; j < properties.length; j++){
            props[properties[j]] = row[j];
            if (numberOnes.indexOf(j) !== -1){
                props[properties[j]] = parseFloat(props[properties[j]]);
            }
        }
    
        var thing= {
            "type": "Feature",
            "properties": props,
            "geometry": { "type": "Point", "coordinates": [ props["Longitude"], props["Latitude"] ] }
        }

        obj.features.push(thing);
    }
    return obj;
}


function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': "AIzaSyCFhBNWfCpe7ndsc3oXjbXactN1bjzjqAM",
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
        'path': 'https://sheets.googleapis.com/v4/spreadsheets/12RAs7VeT9vcm38JlTfO52rpGgrCQDNBapsw3Q7z5qXs/values/Sheet1'
    })

  }).then(function(response) {
    var json_MetroWestProperties0 = parseData(response.result.values);
    // window.json_MetroWestProperties0 = json_MetroWestProperties0;
    window.onLoadData(json_MetroWestProperties0);
    // console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};

// 1. Load the JavaScript client library.
gapi.load('client', start);

