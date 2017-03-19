$(document).ready(function () {
      var ht=0;
      var score_span=$("#score");
 $('.a2').mouseover(function() {
    $(this).fadeTo(1,1);
    $(this).css('border-color','#2AAAFF');
$("#btn").click(function () {
    	$("#heart").css('color','red');
    	ht=ht+1;
    	score_span.text(ht);
    });
});
  $('.a2').mouseout(function(){
  	$("#btn").off('click');
    $(this).fadeTo(1,0);
    $("#heart").css('color','black');
});
});
