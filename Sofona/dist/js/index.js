$(document).ready(function(){$(".last-section__right-img svg").click(function(o){o.preventDefault(),$("#overlay").fadeIn(400,function(){$("#modal_form").css("display","flex").animate({opacity:1,top:"25%"},200)})}),$("#modal_close, #overlay").click(function(){$("#modal_form").animate({opacity:0,top:"45%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})});