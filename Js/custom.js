$(function() {
  $('.top').click(function() {
    $('html,body').animate({
        scrollTop: 0,
      }, 1000);
    });

    $(window).scroll(function() {
      var scrolling = $(this).scrollTop();

      if (scrolling > 1100) {
          $('#top').fadeIn({
              fadeSpeed: 1200,
          });
      } else {
          $('#top').fadeOut({
              fadeSpeed: 2000,
          });
      }

      if (scrolling > 500) {
          $('.navbar').addClass('nav-fix');
          $('.m-menu .nav-item .nav-link').addClass('over-flow');
      } else {
          $('.navbar').removeClass('nav-fix');
          $('.m-menu .nav-item .nav-link').removeClass('over-flow');
      }
  });

  $('#color-choice .color-icon').on('click',function(){
    $('#color-choice').toggleClass('color-click');
  });

  $('#color-choice ul .default').on('click',function(){
    $('body').removeClass('green').removeClass('blue').removeClass('orange').removeClass('purple');
  });

  $('#color-choice ul .green').on('click',function(){
    $('body').addClass('green').removeClass('blue').removeClass('orange').removeClass('purple');
  });

  $('#color-choice ul .blue').on('click',function(){
    $('body').addClass('blue').removeClass('green').removeClass('orange').removeClass('purple');
  });

  $('#color-choice ul .orange').on('click',function(){
    $('body').addClass('orange').removeClass('blue').removeClass('green').removeClass('purple');
  });
  
  $('#color-choice ul .purple').on('click',function(){
    $('body').addClass('purple').removeClass('blue').removeClass('orange').removeClass('green');
  });

    $('.nav-link').click(function() {
        $(this).appendClass('active').sibling().removeClass('active');
    });

    $('.venobox').venobox();


    $('.bg-slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
    });

    $('.team-slider').slick({
        arrows: false,
        slidesToScroll: 2,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '40px',
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.test-slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 2,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.count').counterUp({
        delay: 1,
        time: 1000
    });

    $('#membership .pricing h4 span.mpr').counterUp({
        delay: 1,
        time: 100
    });

    $('.brand-slider').slick({
        slidesToShow: 5,
        arrows: false,
        dots: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 6000,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                infinite: true,
                centerPadding: '40px',
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '20px',
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding:'30px',
              }
            },
            {
              breakpoint: 370,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding:'50px',
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});