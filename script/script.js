window.addEventListener('load', function(e){
    bg_height = document.querySelector('.layer-00').clientHeight - 138; // Coś się złego podziało i wynikła potrzeba 
    const layer03 = document.querySelector('.layer-03');                //ustawienie elementów na samym początku nie mam zielonego pojęcia dlaczego
    layer03_height = layer03.clientHeight;                              // jak to się mówi 'wcześniej mi działało'
    pos_3 = bg_height - layer03_height + 'px';
    layer03.style.marginTop= pos_3;

    const bg_img_first_section = document.querySelector('.first_img');
    bg_img_firs_section_height = bg_img_first_section.clientHeight;
    pos_4 = bg_height + 'px';
    bg_img_first_section.style.marginTop= pos_4;

    const title_img_first_section = document.querySelector('.first_title');
    pos_5 = bg_height + bg_img_firs_section_height/3 + 'px';
    title_img_first_section.style.marginTop = pos_5;

    const bg_img_firs_section_width = bg_img_first_section.clientWidth;
    posX_5 = bg_img_firs_section_width / 2 - 184 + 'px';
    title_img_first_section.style.marginLeft= posX_5;
});

window.addEventListener('resize', function(e){
    //Ustawianie warstw dla obrazka z tortem
    //oraz dynamiczne dostosowanie wysokości
    const image = document.querySelector('.layer-00');   //przypisanie do zmiennej 'image' elementu DOM 'layer-00' to jest tło
    bg_height = image.clientHeight - 138;                      //pobranie z obiektu 'image' wysokości obrazka do zmiennej 'bg_height'
    
    const layer01 = document.querySelector('.layer-01'); //przypisanie do zmiennej 'layer01' elementu DOM 'layer01'
    layer01_height = layer01.clientHeight;		 //przypisanie z obiektu 'layer01' wysokości obraka do zmiennej 'layer01_height'
    pos_1 = bg_height -  layer01_height + 'px';		 //wys. tła - wys. navbara - wys. + jednostka bo inaczej tego CSS nie łyknie 
    layer01.style.marginTop= pos_1;			 //dynamiczna zmiana parametru CSS 'margin-top

    const layer02 = document.querySelector('.layer-02');
    layer02_height = layer02.clientHeight;
    pos_2 = bg_height - layer02_height + 'px';
    layer02.style.marginTop= pos_2;

    const layer03 = document.querySelector('.layer-03');
    layer03_height = layer03.clientHeight;
    pos_3 = bg_height - layer03_height + 'px';
    layer03.style.marginTop= pos_3;
    //jak dojdzie się do ładu z pętlami to można to przekształcić na pętlę
    // bo w sumie wykonywane akcje sią powtarzalne


    // ##Ustawienie pozycji obrazka początkowego dla sekcji 'O nas'##
    const bg_img_first_section = document.querySelector('.first_img');  //ustawienie pierwszego obrazka tytułowego dla sekcji "O nas"  
    bg_img_firs_section_height = bg_img_first_section.clientHeight;
    pos_4 =  bg_height + 'px';
    bg_img_first_section.style.marginTop= pos_4;

    const title_img_first_section = document.querySelector('.first_title'); //ustawienie napisu "O nas" względem osi Y
    pos_5 = bg_height + bg_img_firs_section_height/3 + 'px';
    title_img_first_section.style.marginTop = pos_5;

    const bg_img_firs_section_width = bg_img_first_section.clientWidth; // ustawienie napisu "O nas" względem osi X
    posX_5 = bg_img_firs_section_width / 2 - 184 + 'px';
    title_img_first_section.style.marginLeft= posX_5;

});

window.addEventListener('scroll', function(e) {
/*
    const elements0 = document.querySelector('.layer-00');
    const elements1 = document.querySelector('.layer-01');
    const elements2 = document.querySelector('.layer-02');
    const elements3 = document.querySelector('.layer-03');
    const elements4 = document.querySelector('.first_img');
    const elements5 = document.querySelector('.first_title');
*/
   var scrolled = window.pageYOffset;
/*
   var rate0 = scrolled * -1.3;
   elements0.style.transform = 'translate3d(0px,'+rate0+'px, 0px)';
    
    var rate1 = scrolled * -1.4;
    elements1.style.transform = 'translate3d(0px,'+rate1+'px, 0px)';

    var rate2 = scrolled * -1.5;
    elements2.style.transform = 'translate3d(0px,'+rate2+'px, 0px)';
    
    var rate3 = scrolled * -2;
    elements3.style.transform = 'translate3d(0px,'+rate3+'px, 0px)';

    var rate4 = scrolled * -2.1;
    elements4.style.transform = 'translate3d(0px,'+rate4+'px, 0px)';

    var rate5 = scrolled * -2.5;
    elements5.style.transform = 'translate3d(0px,'+rate5+'px, 0px)';
*/

    const elements = document.querySelectorAll('.parallax');
    dupaJas = elements;
    console.log
    var index = 0
    let lenght = elements.length;
    console.log(elements);
    console.log(lenght);
    

    
    for (index; index < lenght; index++) {
	//console.log(index + ', ' + lenght);
	
	var pos = window.pageYOffset * elements[index].dataset.value;
	elements[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
    }

});
