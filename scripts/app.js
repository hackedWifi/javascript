$(function() {
  var row = 2;
  var col = 4;
    for(i=0; i<row; i++) {
         $('<div>').appendTo('body')
         $('body').find('div').addClass('row');
}
         for(j=0; j<col; j++){
           $('<div>').appendTo('.row').addClass('div-box');
         }
});
