$('.nav__btn').on('click',function(){
  $('.nav').toggleClass('nav--active');
  $('.nav').toggleClass('nav--def');
})
// 
$('.nav__list-item').on('click',function(){
  $('.nav__list-item').removeClass('nav__list-item--active');
  $(this).toggleClass('nav__list-item--active');
})
// 


 
// 
var scrollBottom = $(window).scrollTop() + $(window).height();
$(window).scroll(function(){
  if($(this).scrollTop() > 120) {
    $(".header-top").css("position","fixed");
    $(".header-top").css("width","100%");
    $(".header-top").css("background","#fff");
    $(".header-top").css("top","0");
    $(".header-top").css("left","0");
    $(".nav__list").css("right","3vw");
    $(".nav__list").css("top","32px");
    $(".header-top").css("padding","20px");
    $(".header-top").css("box-shadow","0 0 2px gray");

   } else if (scrollBottom  > 120) {
    $(".header-top").css("position","relative");
    $(".header-top").css("background","transparent");
    $(".nav__list").css("right","10vw");
    $(".nav__list").css("top","120px");
    $(".header-top").css("padding","40px 20px");
    $(".header-top").css("box-shadow","0 0 0 #fff");
    }
});
// 
$(function () {
  $(".portfolio__item").slice(0, 2).show();
  $("#portfolio__link").on('click', function (e) {
      e.preventDefault();
      $(".portfolio__item:hidden").slice(0, 4).slideDown(0);
      if ($(".portfolio__item:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
  });
});
// 
var sections = $('.section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('nav__list-link--active');
      sections.removeClass('nav__list-link--active');
      
      // $(this).addClass('nav__list-item--active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('nav__list-link--active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});