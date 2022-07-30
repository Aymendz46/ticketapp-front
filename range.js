$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0.25,
    max: 40,
    //values: [ 75, 300 ],
    values:[0.25, 40],

    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0]); //+ " - $" + ui.values[ 1 ] );
    },
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0)); // +
  // " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  // $("#amount").val("$" + $("#slider-range").slider("values", 5)); // +

});
