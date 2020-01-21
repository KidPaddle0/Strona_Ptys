window.addEventListener('resize', function(e){
     const image = document.querySelector('.layer-00');
     bg_height = image.clientHeight;
     
     const layer01 = document.querySelector('.layer-01');
     layer01_height = layer01.clientHeight;
     pos_1 = bg_height - 138 - layer01_height;
     pos_01 = pos_1 + "px";
     layer01.style.marginTop= pos_01;

     const layer02 = document.querySelector('.layer-02');
     layer02_height = layer02.clientHeight;
     pos_2 = bg_height - 138 - layer02_height;
     pos_02 = pos_2 + "px";
     layer02.style.marginTop= pos_02;

     const layer03 = document.querySelector('.layer-03');
     layer03_height = layer03.clientHeight;
     pos_3 = bg_height - 138 - layer03_height;
     pos_03 = pos_3 + "px";
     layer03.style.marginTop= pos_03;
});

window.addEventListener('scroll', function(e) {

    const elements = document.querySelector('.parallax');
/*
    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.09;
 console.log(rate);
    elements.style.transform = 'translate3d(0px,'+rate+'px, 0px)';
*/
    var index = 0, lenght = 3;
    console.log(lenght);
    
    for (index; index < lenght; index++) {
	console.log(index + ', ' + lenght);
	
	var pos = window.pageYOffset * elements[index].dataset.value;
	elements[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
    }
});


