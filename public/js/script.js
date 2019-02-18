$(function() {

   $(".sideBtn").click(function() {
      // remove classes from all
      $(".sideBtn").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});