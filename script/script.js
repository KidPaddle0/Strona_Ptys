window.addEventListener('load', function(e){
    const bg_height = document.querySelector('.layer-00');
    let bg = bg_height.clientHeight - 138;				// Coś się złego podziało i wynikła potrzeba 
    
    const layer03 = document.querySelector('.layer-03');                //ustawienie elementów na samym początku nie mam zielonego pojęcia dlaczego
    pos_3 = bg - layer03.clientHeight + 'px';				// jak to się mówi 'wcześniej mi działało'
    layer03.style.marginTop= pos_3;

    const bg_img_first_section = document.querySelector('.first_img');
    pos_4 = bg + 'px';
    bg_img_first_section.style.marginTop= pos_4;

    const title_img_first_section = document.querySelector('.first_title');
    pos_5 = bg + bg_img_first_section.clientHeight /2 + 'px';
    title_img_first_section.style.marginTop = pos_5;

    const bg_img_firs_section_width = bg_img_first_section.clientWidth;
    posX_5 = bg_img_first_section.clientWidth / 2 - 184 + 'px';
    title_img_first_section.style.marginLeft= posX_5;
// treść pierwszej sekcji
    const fs = document.querySelector('.fs_content');
    let h = bg_img_first_section.clientHeight;
    let th = h + bg -50 + 'px';
    fs.style.marginTop = th;
//obrazek tytułowy drugiej sekcji
    const bg_img_second_section = document.querySelector('.bg_image_s2');
    let pos_img_s2 = bg + fs.clientHeight + bg_img_first_section.clientHeight + 'px';
    bg_img_second_section.style.marginTop = pos_img_s2;

    const title_img_second_section = document.querySelector('.title_s2');
    posX_title_s2 = bg_img_second_section.clientWidth / 2 - 184 + 'px';
    posY_title_s2 = bg + fs.clientHeight + bg_img_first_section.clientHeight + bg_img_second_section.clientHeight + 'px';
    title_img_second_section.style.marginLeft= posX_title_s2;
    title_img_second_section.style.marginTop = posY_title_s2;



});

window.addEventListener('resize', function(e){
    //Ustawianie warstw dla obrazka z tortem
    //oraz dynamiczne dostosowanie wysokości
    const image = document.querySelector('.layer-00');   //przypisanie do zmiennej 'image' elementu DOM 'layer-00' to jest tło
    let bg_height = image.clientHeight - 138;                      //pobranie z obiektu 'image' wysokości obrazka do zmiennej 'bg_height' i przesunięcie o wys. navbara
    
    const ciasto = document.querySelectorAll('.ciasto');
    let len = ciasto.length;
    let index = 0;
    for(index; index < len; index++){
	let pos = bg_height - ciasto[index].clientHeight + 'px'; // bg_height - wys. obrazka+ jednostka bo inaczej tego CSS nie łyknie 
	ciasto[index].style.marginTop = pos;		         // dynamiczna zmiana parametru CSS 'margin-top
    }

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

    const fs = document.querySelector('.fs_content');
    let h = bg_img_first_section.clientHeight;
    let th = h + bg_height -50 + 'px';
    fs.style.marginTop = th;

    const bg_img_second_section = document.querySelector('.bg_image_s2');
    let pos_img_s2 = bg_height + fs.clientHeight + bg_img_first_section.clientHeight -50 + 'px';
    bg_img_second_section.style.marginTop = pos_img_s2;

    const title_img_second_section = document.querySelector('.title_s2');
    posX_title_s2 = bg_img_second_section.clientWidth / 2 - 184 + 'px';
    posY_title_s2 = posY_title_s2 = bg_height + fs.clientHeight + bg_img_first_section.clientHeight + bg_img_second_section.clientHeight + 'px';
    title_img_second_section.style.marginLeft= posX_title_s2;
    title_img_second_section.style.marginTop = posY_title_s2;
});

window.addEventListener('scroll', function(e) {

    var scrolled = window.pageYOffset;

    const elements = document.querySelectorAll('.parallax');
    var index = 0
    let lenght = elements.length;

    for (index; index < lenght; index++) {
	var pos = window.pageYOffset * elements[index].dataset.value;
	elements[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
    }

});
