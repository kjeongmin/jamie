/*서브메뉴*/
$(function () {
	$('.nav> li').mouseover(function () {//nav에 li에 마우스를 올렸을 때 
		$('.nav> li').children('.sub').stop().slideDown();//nav에 li의 자식인 sub를 앞에 애니메이션이 있다면 멈추고 슬라이드 다운 시킨다.
	});
	$('.nav> li').mouseleave(function () {//nav에 li에 마우스가 떠났을 때
		$('.nav> li').children('.sub').stop().slideUp();//nav에 li의 자식인 sub를 앞에 애니메이션이 있다면 멈추고 슬라이드 업 시킨다.
	});
});
/*서브메뉴*/
/*팝업inster*/
$(function () {
	$(".sns ul li:nth-child(1)").click(function () {
		$("#popup").show();
	});
	$(".right").click(function () {
		$("#popup").hide();
	});
});
/*팝업inster*/
/*팝업 광고*/
$(function () {

	$("#popupk p").click(function () {
		$("#popupk").hide();
	});
});
/*팝업 광고*/


