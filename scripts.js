$(document).ready(function(){


// SMOOTH SCROLLING
$(function() {
  var topoffset = 70; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

});


//TOOLTIPS
  $(function () {
    $("#gmail").tooltip();
    $("#linkedin").tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
//TOOLTIPS END








  //SUBMIT BUTTON
  $("#submit").on("click", function() {
     console.log("comment");
     var comment = $(".message-box").val();
       $("#visible-comment").html(comment);
         if(comment === "") {
         $(".message-box").css("border", "2px solid red");
       } else {
         $(".message-box").hide();
         $("#submit").hide();
       };
     return false;
   });


  $("#txt_name").keypress(function() {
        var value = $("#txt_name").val();
        $("#myDiv").text(value);
      });


  $(".message-box").on('keyup', function(){
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html("Characters: " + charCount);
    if(charCount>50){
      $("#char-count").css("color", "red");
    }
    else{
      $("#char-count").css("color","white");
    }
  });


}); // end jQ
