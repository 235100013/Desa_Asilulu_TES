var wms_layers = [];
var format_Pulau_0 = new ol.format.GeoJSON();
var features_Pulau_0 = format_Pulau_0.readFeatures(json_Pulau_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pulau_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pulau_0.addFeatures(features_Pulau_0);var lyr_Pulau_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pulau_0, 
                style: style_Pulau_0,
    title: 'Pulau<br />\
    <img src="styles/legend/Pulau_0_0.png" /> RumH<br />\
    <img src="styles/legend/Pulau_0_1.png" /> RUmah<br />\
    <img src="styles/legend/Pulau_0_2.png" /> Rumah<br />\
    <img src="styles/legend/Pulau_0_3.png" /> rumah<br />\
    <img src="styles/legend/Pulau_0_4.png" /> Ruamh<br />\
    <img src="styles/legend/Pulau_0_5.png" /> Raden<br />\
    <img src="styles/legend/Pulau_0_6.png" /> Pulau<br />\
    <img src="styles/legend/Pulau_0_7.png" /> Pemukiman<br />\
    <img src="styles/legend/Pulau_0_8.png" /> <br />\
    <img src="styles/legend/Pulau_0_9.png" /> Cagar<br />'
        });var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_1_0.png" /> Cagar Alam<br />\
    <img src="styles/legend/Jalan_1_1.png" /> <br />\
    <img src="styles/legend/Jalan_1_2.png" /> Jalan Lintas<br />\
    <img src="styles/legend/Jalan_1_3.png" /> Perbatasan<br />\
    <img src="styles/legend/Jalan_1_4.png" /> Sungai<br />\
    <img src="styles/legend/Jalan_1_5.png" /> Batas Laut<br />\
    <img src="styles/legend/Jalan_1_6.png" /> Jalan Lokal<br />'
        });var format_DesaIndonesia_2 = new ol.format.GeoJSON();
var features_DesaIndonesia_2 = format_DesaIndonesia_2.readFeatures(json_DesaIndonesia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_2.addFeatures(features_DesaIndonesia_2);var lyr_DesaIndonesia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_2, 
                style: style_DesaIndonesia_2,
                title: '<img src="styles/legend/DesaIndonesia_2.png" /> DesaIndonesia'
            });

lyr_Pulau_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_DesaIndonesia_2.setVisible(true);
var layersList = [lyr_Pulau_0,lyr_Jalan_1,lyr_DesaIndonesia_2];
lyr_Pulau_0.set('fieldAliases', {'id': 'id', 'Pulau': 'Pulau', });
lyr_Jalan_1.set('fieldAliases', {'id': 'id', 'Nama_JLN': 'Nama_JLN', 'Jenis_JLN': 'Jenis_JLN', });
lyr_DesaIndonesia_2.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', 'Objek': 'Objek', });
lyr_Pulau_0.set('fieldImages', {'id': 'TextEdit', 'Pulau': 'TextEdit', });
lyr_Jalan_1.set('fieldImages', {'id': 'TextEdit', 'Nama_JLN': 'TextEdit', 'Jenis_JLN': 'TextEdit', });
lyr_DesaIndonesia_2.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', 'Objek': 'TextEdit', });
lyr_Pulau_0.set('fieldLabels', {'id': 'no label', 'Pulau': 'no label', });
lyr_Jalan_1.set('fieldLabels', {'id': 'no label', 'Nama_JLN': 'no label', 'Jenis_JLN': 'no label', });
lyr_DesaIndonesia_2.set('fieldLabels', {'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', 'Objek': 'no label', });
lyr_DesaIndonesia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});