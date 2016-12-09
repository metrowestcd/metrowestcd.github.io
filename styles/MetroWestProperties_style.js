var size = 0;
function categories_MetroWestProperties(feature, value) {
                switch(value) {case "Own":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(146,0,210,1.0)"})})
    })];
                    break;
case "Rent":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(0,217,255,1.0)"})})
    })];
                    break;
case "Transitional":
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,127,0,1.0)"})})
    })];
                    break;}};
var styleCache_MetroWestProperties={}
var style_MetroWestProperties = function(feature, resolution){
    var value = feature.get("Tenancy");
    var style = categories_MetroWestProperties(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MetroWestProperties[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_MetroWestProperties[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MetroWestProperties[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};