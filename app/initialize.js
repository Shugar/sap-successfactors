import $ from "jquery";

$(document).ready(() => {

  $('a[href^="#"]').on('click', function() {
    let el = $(this).attr('href');
    $('body').animate({scrollTop: $(el).offset().top}, 500);
  });

  $(window).on("scroll", () => {
    let fromTop = $("body").scrollTop();
    $('.sticky-header').toggleClass("sticky", (fromTop > 579));
  });
});
