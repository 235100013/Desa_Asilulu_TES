var size = 0;
var placement = 'point';
function categories_Pulau_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'RumH':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'RUmah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Rumah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'rumah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Ruamh':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Raden':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Pulau':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,0.741176)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,244,199,0.741176)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Pemukiman':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,133,132,0.478431)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(165,191,221,0.478431)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        
        fill: fill_Pulau_0,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Cagar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(178,223,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Pulau_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Pulau");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Pulau_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
