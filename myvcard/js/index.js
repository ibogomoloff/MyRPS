if (document.addEventListener){
	document.addEventListener("DOMContentLoaded", handleMouseClick, false);
}else handleMouseClick ();

function handleMouseClick (){
	var content = document.getElementById('content');
	
	content.onclick = function(e) {
		var item_allQuestion = document.getElementById('item_allQuestion');
		var item_specialQuestion = document.getElementById('item_specialQuestion');
		var e = e || event;				
		var target = e && e.target || e.srcElement;
		if (target.className == 'b-content-leftSiteBar-button_item_allQuestion') {
			item_allQuestion.style.display = 'block';
			item_specialQuestion.style.display = 'none';
		}
		if (target.className == 'b-content-leftSiteBar-button_item_specialQuestion') {
			item_allQuestion.style.display = 'none';
			item_specialQuestion.style.display = 'block';
		}
		if (target.className == 'b-content-rightSiteBar-item-button') {
			var parent = target.parentNode;
			var cildren = parent.getElementsByTagName('div')[0];
			cildren.style.display = cildren.style.display ? '': 'block';
		}
	}
}