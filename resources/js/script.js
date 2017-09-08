$(document).ready(function() {


    /* STICKY NAVIGATION */
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      // offset: '60px;'
    });

    /* SMOOTH SCROLLING */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* MOBILE NAVIGATION */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    // ANIMATIONS
    $('.js-animation1').waypoint(function(direction) {
        $('.js-animation1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.left').waypoint(function(direction) {
        $('.left').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    $('.right').waypoint(function(direction) {
        $('.right').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
});
