var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_MetroWestProperties = new ol.format.GeoJSON();
var features_MetroWestProperties = format_MetroWestProperties.readFeatures(geojson_MetroWestProperties, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetroWestProperties = new ol.source.Vector();
jsonSource_MetroWestProperties.addFeatures(features_MetroWestProperties);var lyr_MetroWestProperties = new ol.layer.Vector({
                source:jsonSource_MetroWestProperties, 
                style: style_MetroWestProperties,
                title: "Metro West Properties"
            });

lyr_MetroWestProperties.setVisible(true);
var layersList = [baseLayer,lyr_MetroWestProperties];
lyr_MetroWestProperties.set('fieldAliases', {'Property': 'Property', 'Status': 'Status', 'Number of Units': 'Number of Units', 'Description': 'Description', 'Tenancy': 'Tenancy', 'Address': 'Address', 'Latitutde': 'Latitutde', 'Longitude': 'Longitude', });
lyr_MetroWestProperties.set('fieldImages', {'Property': 'TextEdit', 'Status': 'TextEdit', 'Number of Units': 'TextEdit', 'Description': 'TextEdit', 'Tenancy': 'TextEdit', 'Address': 'TextEdit', 'Latitutde': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MetroWestProperties.set('fieldLabels', {'Property': 'header label', 'Status': 'inline label', 'Number of Units': 'inline label', 'Description': 'inline label', 'Tenancy': 'inline label', 'Address': 'inline label', 'Latitutde': 'no label', 'Longitude': 'no label', });
