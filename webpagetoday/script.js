$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /*category accordion*/
  $('.category-accordion .detail').eq(0).show()
  $('.category-accordion .title').click(function() {
    $(this).next().show();
    $(this).siblings('.category-accordion .title').next().stop().slideUp();

    $(this).addClass('active')
    $(this).siblings('.category-accordion .title').removeClass('active');

  });
});
