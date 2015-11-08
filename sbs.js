$template ='<div class="tile"><a href=""><img src="${tileImg}"></a><div class="meta_data"><div class="info"></div><h3 class="heading">S{heading}</h3><div class="field">$(field)</div></div></div>'

$.ajax("http://localhost:8000/tile.json", {
	success: function(data){

		$.each(data, function(i, item){

			$tilelist = $(".tile");
			$tilelist.eq(i).find("img").attr("src", item.tileImg);
			$tilelist.eq(i).find(".heading").text( item.heading);
			$tilelist.eq(i).find(".field").text( item.field);
		})
	},
	error: function(data){
		alert("Something is wrong");
	},
	complete: function(){
		$(".tile img").load(function(){
			letsStart();
		})
	}
})


function letsStart(){
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


}

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
