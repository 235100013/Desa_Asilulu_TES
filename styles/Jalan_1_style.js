var size = 0;
var placement = 'point';
function categories_Jalan_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Cagar Alam':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,245,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,170,0,1.0)', lineDash: [1,5], lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,179,138,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Jalan Lintas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(76,38,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,206,128,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Perbatasan':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,191,111,0.729412)', lineDash: [10,5], lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Sungai':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.223529)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,108,200,0.223529)', lineDash: null, lineCap: 'square', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Batas Laut':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,80,80,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Jalan Lokal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,80,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,248,248,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Jalan_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nama_JLN");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Jalan_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
