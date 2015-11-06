	

$(document).ready(function(){
	$tilelist=$(".tile");
	$tile3=$tilelist.eq(2);

	$headings = $(".heading");
	$fields =$(".field");

	setHeight();

	$tile3.click(function(){
		changeHeight($tilelist);
	})

	$tilelist.mouseenter(function(){
		$(this).find(".field").show();
	})
	$tilelist.mouseleave(function(){
		$(this).find(".field").hide();
	})

	// $headings.mouseenter(function(){
	// 	$(this).parent().find(".field").show();
	// })
	// $headings.mouseleave(function(){
	// 	$(this).parent().find(".field").hide();
	// })


})

function setHeight(){
	$tilelist=$(".tile");

	for($i=1; $i < $tilelist.length ; $i++){
		$tilelist.eq($i).outerHeight($tilelist.eq(0).outerHeight()/2);
	}

}

function changeHeight($tilelist){
	$tilelist.eq(1).outerHeight(100);
	$tilelist.eq(2).outerHeight(200);
	$tilelist.eq(3).outerHeight(300);

}

