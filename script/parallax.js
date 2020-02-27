//window.addEventListener('load', function(e){
    window.addEventListener('scroll', function(e){
    
	var scrolled = window.pageYOffset;

	const elements = document.querySelectorAll('.parallax');
	var index = 0;
	var len = elements.length;

	for (index; index < len; index++){
	    var pos = window.pageYOffset * elements[index].dataset.value;
	    elements[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
	    //console.log('pos of: ' + elements[index]+' is '+pos);
	}
    });
//});
