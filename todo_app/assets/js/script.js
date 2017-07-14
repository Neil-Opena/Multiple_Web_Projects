var willDelete = false;

//delete later
//check off specific todos by clicking
$("li").on("click",function(){
	if(!willDelete){
		$(this).toggleClass("strike");
	} //else delete 
});