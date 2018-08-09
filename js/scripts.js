$(document).ready(function(){
  $("form#triangle").submit(function(event){
    event.preventDefault();


    var one =  parseFloat($("input#side1").val());
    var two =  parseFloat($("input#side2").val());
    var three =  parseFloat($("input#side3").val());
    var result;

    if ( isNaN(one) || isNaN(two) || isNaN(three)  ) {
    result = "Enter valid input";
    } else if ( one + two <= three || two + three <= one || one + three <=  two ){
    result = "Not a Triangle";
    } else if ( one === two && two === three && one === three) {
    result = "Equilateral";
    } else if ( one === two || two === three || three === one) {
    result = "Isosceles";
    } else if ( one !== two && two !== three && one !== three ) {
    result = "Scalene";
    } else {
    result = "Not a Number";
    }
    $(".output").text(result);
    });




  });
