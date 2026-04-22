var w = 0;
$(function () {
  "use strict";

  // ***** Preloader ***** //
  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").addClass("loaded");
      $("#preloader").delay(800).fadeOut();
    }, 2200);
  });

  // ***** Sticky Header ***** //
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 40) {
      $(".header").addClass("sticky-header");
    } else {
      $(".header").removeClass("sticky-header");
    }
  });

  // ***** Menu Toggle Start ***** //
  $(document).ready(function () {
    $(".menu-toggle").click(function () {
      $(".main-menu").slideToggle(300);
      $(this).toggleClass("active");
    });

    // DROPDOWN TOGGLE
    $(".has-dropdown > a").click(function (e) {
      e.preventDefault();

      let parent = $(this).parent();

      if (parent.hasClass("active")) {
        parent.removeClass("active");
        parent.find(".dropdown-content").slideUp(200);
      } else {
        $(".has-dropdown").removeClass("active");
        // $(".dropdown-content").slideUp(200);

        parent.addClass("active");
        parent.find(".dropdown-content").slideDown(300);
      }
    });
  });

  // ***** Img Hover Tilt ***** //
  if ($(".img-tilt").length > 0) {
    $(".img-tilt").tilt({
      reset: false,
    });
  }

  // ***** Heart Fill ***** //
  $(document).ready(function () {
    $(".heart-icon-box").click(function () {
      $(this).toggleClass("heart-fill");
    });
  });

  // ***** Header Search ***** //
  $(document).ready(function () {
    const $menu = $(".search-form-modal");
    $(document).mouseup((e) => {
      if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
        $(".search-form-modal").removeClass("open");
      }
    });

    $(".header .search").on("click", function () {
      $(".search-form-modal").addClass("open");
      $(".search-form .form-control").focus();
    });

    $(".search-form .btn-close").on("click", function () {
      $(".search-form-modal").removeClass("open");
    });
  });

  // ***** Header Profile ***** //
  if ($(".header").length > 0) {
    const $menu = $(".header-profile-in,.header-profile a");
    $(document).mouseup((e) => {
      if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
        $(".header-profile-in").slideUp();
      }
    });

    $(".header-profile a").on("click", () => {
      $(".header-profile-in").slideToggle();
    });
  }

  // ***** Tabing ***** //
  $(".explore-filter ul li a,.nav-tab ul li a").on("click", function () {
    var target = $(this).attr("data-tab");
    $(".explore-filter ul li a,.nav-tab ul li a").removeClass("active");
    $(this).addClass("active");
    $("#" + target)
      .fadeIn(1000)
      .siblings(".tab-panel")
      .hide();
    return false;
  });

  // ***** Explore Creator Load More ***** //
  $(function () {
    $(".all-creator").slice(0, 12).show();
    $("#loadmore").on("click", function (e) {
      e.preventDefault();
      $(".all-creator:hidden").slice(0, 8).slideDown();
      if ($(".all-creator:hidden").length == 0) {
        $("#loadless").fadeIn("slow");
        $("#loadless").addClass("load-less");
        $("#loadmore").hide();
      }
    });

    $("#loadless").on("click", function (e) {
      e.preventDefault();
      $(".all-creator:not(:lt(12))").fadeOut();
      $("#loadmore").fadeIn("slow");
      $("#loadless").removeClass("load-less");
      $("#loadless").hide();
    });
  });

  // ***** Explore Artwork Load More ***** //
  $(function () {
    $(".all-auction-box").slice(0, 6).show();
    $("#loadmore").on("click", function (e) {
      e.preventDefault();
      $(".all-auction-box:hidden").slice(0, 3).slideDown();
      if ($(".all-auction-box:hidden").length == 0) {
        $("#loadless").fadeIn("slow");
        $("#loadless").addClass("load-less");
        $("#loadmore").hide();
      }
    });

    $("#loadless").on("click", function (e) {
      e.preventDefault();
      $(".all-auction-box:not(:lt(6))").fadeOut();
      $("#loadmore").fadeIn("slow");
      $("#loadless").removeClass("load-less");
      $("#loadless").hide();
    });
  });

  // ***** Activity Load More ***** //
  $(function () {
    $(".activity-box-content").slice(0, 6).show();
    $("#loadmore").on("click", function (e) {
      e.preventDefault();
      $(".activity-box-content:hidden").slice(0, 5).slideDown();
      if ($(".activity-box-content:hidden").length == 0) {
        $("#loadless").fadeIn("slow");
        $("#loadless").addClass("load-less");
        $("#loadmore").hide();
      }
    });

    $("#loadless").on("click", function (e) {
      e.preventDefault();
      $(".activity-box-content:not(:lt(6))").fadeOut();
      $("#loadmore").fadeIn("slow");
      $("#loadless").removeClass("load-less");
      $("#loadless").hide();
    });
  });

  // ***** Activity Filter ***** //
  $(".activity-filter ul li a").on("click", function () {
    $(this).addClass("active");
  });

  $(".clear-filter a").on("click", function () {
    $(".activity-filter ul li a").removeClass("active");
  });

  // ***** Single Artwork Load More ***** //
  $(function () {
    $(".single-auction-box").slice(0, 4).show();
    $("#loadmore").on("click", function (e) {
      e.preventDefault();
      $(".single-auction-box:hidden").slice(0, 4).slideDown();
      if ($(".single-auction-box:hidden").length == 0) {
        $("#loadless").fadeIn("slow");
        $("#loadless").addClass("load-less");
        $("#loadmore").hide();
      }
    });

    $("#loadless").on("click", function (e) {
      e.preventDefault();
      $(".single-auction-box:not(:lt(4))").fadeOut();
      $("#loadmore").fadeIn("slow");
      $("#loadless").removeClass("load-less");
      $("#loadless").hide();
    });
  });

  // ***** Timer ***** //
  if ($("#timer").length > 0) {
    // var target_date = new Date().getTime() + (1000*3600*10); // set the countdown date
    var your_date = new Date();
    var numberOfDaysToAdd = 11;
    your_date.setDate(your_date.getDate() + numberOfDaysToAdd);

    var hours, minutes, seconds;
    var countdown = document.getElementById("timer");

    getCountdown();
    setInterval(function () {
      getCountdown();
    }, 1000);

    function getCountdown() {
      var current_date = new Date().getTime();
      var seconds_left = (your_date - current_date) / 1000;
      seconds_left = seconds_left % 86400;
      hours = pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;
      minutes = pad(parseInt(seconds_left / 60));
      seconds = pad(parseInt(seconds_left % 60));
      countdown.innerHTML =
        "<span>" +
        hours +
        "</span><span>" +
        minutes +
        "</span><span>" +
        seconds +
        "</span>";
    }

    function pad(n) {
      return (n < 10 ? "0" : "") + n;
    }
  }

  // ***** Contact Form SMS Start ***** //
  $(".contactfrm").on("submit", function (e) {
    e.preventDefault();
    $(".contactfrmmsg").slideDown("slow");
  });

  // ***** FAQ According Start ***** //
  $(function () {
    $(".faq-title").on("click", function (j) {
      var dropDown = $(this).closest(".faq-box").find(".faq-panel");
      $(this).closest(".tab-panel").find(".faq-panel").not(dropDown).slideUp();

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this)
          .closest(".tab-panel")
          .find(".faq-title.active")
          .removeClass("active");
        $(this).addClass("active");
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });
  });

  // ***** Multiple Countdown Start ***** //
  if (jQuery("[data-countdown]").length > 0) {
    jQuery("[data-countdown]").each(function (countKey) {
      const currentRef = jQuery(this);
      const data_time = jQuery(this).attr("data-time");
      var dataTimeArr = data_time.split(":");

      // current time + set data-time value
      const currentDate = new Date();
      const currentTime = currentDate.getTime();
      currentDate.setHours(currentDate.getHours() + parseInt(dataTimeArr[0]));
      currentDate.setMinutes(
        currentDate.getMinutes() + parseInt(dataTimeArr[1]),
      );
      currentDate.setSeconds(
        currentDate.getSeconds() + parseInt(dataTimeArr[2]),
      );

      // count timer
      var dataTimer = setInterval(() => {
        const difference = +currentDate - +new Date();

        if (difference > 0) {
          const parts = {
            //days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
          currentRef
            .find(".hours")
            .html(parts.hours > 9 ? parts.hours : "0" + parts.hours.toString());
          currentRef
            .find(".minutes")
            .html(
              parts.minutes > 9
                ? parts.minutes
                : "0" + parts.minutes.toString(),
            );
          currentRef
            .find(".seconds")
            .html(
              parts.seconds > 9
                ? parts.seconds
                : "0" + parts.seconds.toString(),
            );

          // hours, minutes and seconds then timer off
          if (parts.hours == 0 && parts.minutes == 0 && parts.seconds == 0) {
            clearInterval(dataTimer);
          }
        }
      }, 1000);
    });
  }

  // ***** Banner slider ***** //
  if ($(".home-banner-slider").length > 0) {
    $(".home-banner-slider").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      items: 1,
      smartSpeed: 900,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      animateOut: "fadeOut",
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: true,
        },
        767: {
          items: 1,
          dots: false,
          nav: true,
        },
      },
    });
  }

  // ***** Auction slider ***** //
  if ($(".auction-slider,.blog-slider").length > 0) {
    $(".auction-slider,.blog-slider").owlCarousel({
      loop: false,
      nav: false,
      dots: false,
      items: 3,
      smartSpeed: 700,
      responsiveClass: true,
      autoplay: false,
      autoplayTimeout: 5000,
      margin: 30,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          loop: true,
          nav: false,
          dots: true,
        },
        650: {
          items: 2,
          loop: false,
          dots: false,
          nav: false,
        },
        992: {
          items: 3,
          dots: false,
          nav: false,
        },
      },
    });
  }

  // ***** Auction slider 2 ***** //
  if ($(".auction-slider-2").length > 0) {
    $(".auction-slider-2").owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      items: 3,
      smartSpeed: 700,
      responsiveClass: true,
      autoplay: false,
      autoplayTimeout: 5000,
      margin: 30,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          loop: true,
          nav: false,
          dots: true,
        },
        650: {
          items: 2,
          loop: false,
          dots: true,
          nav: false,
        },
        992: {
          items: 3,
          dots: false,
          nav: true,
        },
      },
    });
  }
});
