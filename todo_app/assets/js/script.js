
//check off specific todos by clicking
$("li").on("click",function(){
	$(this).toggleClass("strike");
});

$("span").on("click",function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});