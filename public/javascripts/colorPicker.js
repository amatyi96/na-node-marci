$("#colorPicker").jqxColorPicker({
    width: 300,
    height: 300
});
$("#jqxButton").jqxButton({
    height: '30px',
    width: '200px'
});
$('#jqxButton').on('click', function () {
  var color = $("#colorPicker").jqxColorPicker('getColor');
    var hex = color.hex;
    var rgb = color.r + "," + color.g + "," + color.b;
    alert("Hex: #" + hex + ", RGB: " + rgb);
});