
//check off specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("strike");
});

$("ul").on("click","li span",function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").on("keypress",function(e){
	if(e.which === 13){
		var content = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + content + "</li>");
	}
});