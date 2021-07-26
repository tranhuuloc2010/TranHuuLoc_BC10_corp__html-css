// move to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// change color header reponsive

function addBackgroundHeader() {
  var headerColor = document.getElementById("header");
  headerColor.classList.toggle("change__color-header-dark");
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("#header").addClass("change__color-header-white");
    $("#mode__themes>i").addClass("mode__themes-icon-color");
  } else {
    $("#header").removeClass("change__color-header-white");
    $("#mode__themes>i").removeClass("mode__themes-icon-color");
  }
});
// change themse
//CHANGE HOAI MA DIU CO DUOC, (&^(*&^*))

// seach
$(".control").click(function () {
  $("body").addClass("search-active");
  $(".input-search").focus();
});

$(".icon-close").click(function () {
  $("body").removeClass("search-active");
});

// scrol
$(window).scroll(function () {
  if ($(document).scrollTop() > 0) {
    $("#site-header").addClass("header-scroll ");
  } else {
    $("#site-header").removeClass("header-scroll");
  }

  if ($(document).scrollTop() > 0) {
    $("#navbar__logo").addClass("navbar__logo-color");
  } else {
    $("#navbar__logo").removeClass("navbar__logo-color");
  }
  if ($(document).scrollTop() > 0) {
    $(".nav-link").addClass("navbar__link-color");
  } else {
    $(".nav-link").removeClass("navbar__link-color");
  }
  if ($(document).scrollTop() > 0) {
    $(".active > a").addClass("active-color");
  } else {
    $(".active > a").removeClass("active-color");
  }
});
