/*$(function(){
	call();
});

function call()
{
	alert();
}*/

$(document).ready(function(){
	$(".responsive_toggel").click(function(){
		var data = $('.cross').css("display");
		// console.log(data);
		menu_click(data);
	});

	$(".menu_click").click(function(){
		var data = $('.cross').css("display");
		var screen_small = $(".responsive_toggel").css("display");
		// console.log(screen_small);
		if(screen_small == "block")
			menu_click(data);
	});
});

function menu_click(data){
	if (data === "none"){
		$('.cross').css("display", "inline-block");
		$('.bar_menu').css("display", "none");
		$(".responsive_nav").css("left", "0");
	}
	else{
		$('.cross').css("display", "none");
		$('.bar_menu').css("display", "inline-block");
		$(".responsive_nav").css("left", "-260px");
	}
}