$(document).ready(function(){
  $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if ( scroll > 50) {
            $(".header1").css("background-color", "#2e304a");
            $(".header1").css("height", "74px");
            $(".navbar").css("border-style", "none");

        } else {
            $(".header1").css("background-color", "transparent");
            $(".header1").css("height", "100px");
            $(".navbar").css("border-style", "none none solid none");
        }
    });

    // Waypoints
    $('.text_photo').waypoint(function() {
        $('.text_photo').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    
    // Fancybox
    $('.work-box').fancybox();



});