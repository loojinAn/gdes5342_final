
$(document).ready(function() {

  $(".downtown_p").mouseenter(function() {
    $(this).css({"background": "url(images/downtown_b.png) no-repeat center / cover"});
  });

  $(".downtown_p").mouseleave(function() {
    $(this).css({"background": "url(images/downtown_w.png) no-repeat center / cover"});
  });

  $(".dinkytown_p").mouseenter(function() {
    $(this).css({"background": "url(images/dinkytown_b.png) no-repeat center / cover"});
  });

  $(".dinkytown_p").mouseleave(function() {
    $(this).css({"background": "url(images/dinkytown_w.png) no-repeat center / cover"});
  });

  $(".eastbank_p").mouseenter(function() {
    $(this).css({"background": "url(images/east_b.png) no-repeat center / cover"});
  });

  $(".eastbank_p").mouseleave(function() {
    $(this).css({"background": "url(images/east_w.png) no-repeat center / cover"});
  });

  $(".westbank_p").mouseenter(function() {
    $(this).css({"background": "url(images/west_b.png) no-repeat center / cover"});
  });

  $(".westbank_p").mouseleave(function() {
    $(this).css({"background": "url(images/west_w.png) no-repeat center / cover"});
  });

  $(".sectionIcon1").click(function() {
    $(".sectionBox2").css({"background": "url(images/icon_list_1.png) no-repeat left / contain"});
  });

  $(".sectionIcon2").click(function() {
    $(".sectionBox2").css({"background": "url(images/icon_list_2.png) no-repeat left / contain"});
  });

  $(".sectionIcon3").click(function() {
    $(".sectionBox2").css({"background": "url(images/icon_list_3.png) no-repeat left / contain"});
  });

  $(".sectionIcon4").click(function() {
    $(".sectionBox2").css({"background": "url(images/icon_list_4.png) no-repeat left / contain"});
  });

  $(".sectionIcon5").click(function() {
    $(".sectionBox2").css({"background": "url(images/icon_list_5.png) no-repeat left / contain"});
  });

});
