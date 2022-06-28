var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Potential_Community_Forest_1 = new ol.format.GeoJSON();
var features_Potential_Community_Forest_1 = format_Potential_Community_Forest_1.readFeatures(json_Potential_Community_Forest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potential_Community_Forest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potential_Community_Forest_1.addFeatures(features_Potential_Community_Forest_1);
var lyr_Potential_Community_Forest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potential_Community_Forest_1, 
                style: style_Potential_Community_Forest_1,
                interactive: true,
                title: '<img src="styles/legend/Potential_Community_Forest_1.png" /> Potential_Community_Forest'
            });
var format_River_2 = new ol.format.GeoJSON();
var features_River_2 = format_River_2.readFeatures(json_River_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_2.addFeatures(features_River_2);
var lyr_River_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_River_2, 
                style: style_River_2,
                interactive: true,
                title: '<img src="styles/legend/River_2.png" /> River'
            });
var format_Catchment_3 = new ol.format.GeoJSON();
var features_Catchment_3 = format_Catchment_3.readFeatures(json_Catchment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catchment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catchment_3.addFeatures(features_Catchment_3);
var lyr_Catchment_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Catchment_3, 
                style: style_Catchment_3,
                interactive: true,
                title: '<img src="styles/legend/Catchment_3.png" /> Catchment'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_Potential_Community_Forest_1.setVisible(true);lyr_River_2.setVisible(true);lyr_Catchment_3.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_Potential_Community_Forest_1,lyr_River_2,lyr_Catchment_3];
lyr_Potential_Community_Forest_1.set('fieldAliases', {'OID_': 'OID_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'GIS_Area': 'GIS_Area', 'Company_Na': 'Company_Na', 'Delineated': 'Delineated', 'Name_Abbre': 'Name_Abbre', });
lyr_River_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Catchment_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Potential_Community_Forest_1.set('fieldImages', {'OID_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'GIS_Area': 'TextEdit', 'Company_Na': 'TextEdit', 'Delineated': 'TextEdit', 'Name_Abbre': 'TextEdit', });
lyr_River_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Catchment_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Potential_Community_Forest_1.set('fieldLabels', {'OID_': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Name': 'no label', 'GIS_Area': 'no label', 'Company_Na': 'no label', 'Delineated': 'no label', 'Name_Abbre': 'no label', });
lyr_River_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Catchment_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Catchment_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});