$(document).ready(function () {
    let current = 0;
    const slides = $(".slide");
    const dots = $(".dot");
  
    function showSlide(index) {
      slides.removeClass("active").eq(index).addClass("active");
      dots.removeClass("active").eq(index).addClass("active");
    }

    //     // Hide all overlays, then show the one matching the current slide
    // $('.hero-overlay').hide().eq(index).show();
    // },

    $(".slider-next").click(function () {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  
    $(".slider-prev").click(function () {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  
    dots.click(function () {
      current = $(this).index();
      showSlide(current);
    });
  
    showSlide(current);
  });
  