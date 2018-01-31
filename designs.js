// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var row = $('#input_height').val();
  var column = $('#input_width').val();
  var grid = $("#pixel_canvas");

  grid.children().remove();

  for (var i = 0; i < row; i++) {
    grid.append('<tr></tr>');
    for (var j = 0; j < column; j++) {
      grid.children().last().append('<td></td>');
    }
    grid.on('click','td',function() {
      var color = $('#colorPicker').val();
      $(this).attr('bgcolor',color); 
    });
    grid.on('dblclick','td',function() {
      $(this).attr('bgcolor','white'); 
    });
  }
}
