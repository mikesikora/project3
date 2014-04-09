// $(window).scroll(function() {
//   if( $(this).scrollTop() > 450 ) {
//     $(".nav-contain").addClass("fixed");
//   }
//   else {
//     $(".nav-contain").removeClass("fixed");
//   }
// });
$(function() {

	$(window).scroll(function() {
	  if( $(this).scrollTop() > 150 ) {
	    $("header").addClass("header-shrink");
	  }
	  else {
	    $("header").removeClass("header-shrink");
	  }
	});

	$('.sign-in').click(function(){
		return false;
	});

	$(".id-link").click(function(){
		var thisId = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(thisId).offset().top-70 }, 750);
		return false;
	});

});			

function signin(){
	var username = $("#user").val();
	alert("Sorry " + username + ", we need to add some backend in order to get our user database working.");
	return false;
}
// $(function(){
// 	setInterval(function(){
// 		var $active = $('.image-slide-container img.active');

// 	    if ($active.next().length){
// 	    	$next = $active.next();
// 	    }else{
// 	    	$next = $('.image-slide-container img:first');
// 	    }

// 	    $active.addClass('last-active');
	        
// 	    $next.css({opacity: 0}).addClass('active').animate({opacity: 1}, 1000, function() {
// 	            $active.removeClass('active last-active');
// 	        });
// 	},10000);
// });


