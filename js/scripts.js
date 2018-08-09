$(document).ready(function(){
  $("form#triangle").submit(function(event){
    event.preventDefault();


    var one =  parseFloat($("input#side1").val());
    var two =  parseFloat($("input#side2").val());
    var three =  parseFloat($("input#side3").val());

    if ( isNaN(one) || isNaN(two) || isNaN(three)  ) {
    alert("Enter valid input")
    } else if ( one + two <= three || two + three <= one || one + three <=  two ){
    alert("Not a Triangle");
    } else if ( one === two && two === three && one === three) {
    alert("Equilateral");
    } else if ( one === two || two === three || three === one) {
    alert("Isosceles");
    } else if ( one !== two && two !== three && one !== three ) {
    alert("Scalene");
    } else {
      alert("Not a Number");
    }

    });




  });
