window.addEventListener('load', function(e){

    function set_pos(){
	// Zaczytanie wysokości pierwszego obrazka
	const first_img = document.querySelector('.layer-00');
	let first_img_height = first_img.clientHeight
	
	// ustawianie elementów do parallaxa
	const parallax_layers = document.querySelectorAll('.ciasto');
	let len = parallax_layers.length;
	let index = 0;
	for(index; index < len; index++){
	    let pos = first_img_height - parallax_layers[index].clientHeight + 'px'
	    parallax_layers[index].style.marginTop = pos;
	}
/*
	// ustawianie pozycji pierwszego obrazka dla sekcji 'O nas'
	const bg_img_first_section = document.querySelector('.first_img');
	let pos_first = first_img_height + 'px';
	bg_img_first_section.style.marginTop = pos_first;

	//kontent pierwszej sekcji 'O nas'
	const first_section_content = document.querySelector('.fs_content');
	let pos_4 = first_img_height + bg_img_first_section.clientHeight + 'px';
	first_section_content.style.marginTop= pos_4;

	//obrazek tytuowy drugiej sekcji 'Oferta'
	const bg_img_second_section = document.querySelector('.bg_image_s2');
	let pos_img_s2 = first_img_height + bg_img_first_section.clientHeight + first_section_content.clientHeight + 'px';
	bg_img_second_section.style.marginTop = pos_img_s2;

	//kontent drugiej sekcji 'Oferta'
	const second_section_content = document.querySelector('.ss_content');
	let second_section_pos = first_img_height + bg_img_first_section.clientHeight + first_section_content.clientHeight + bg_img_second_section.clientHeight + 'px';
	second_section_content.style.marginTop= second_section_pos;

	//motto
	const motto = document.querySelector('.motto');
	let m_h = first_img_height + bg_img_first_section.clientHeight +first_section_content.clientHeight + bg_img_second_section.clientHeight + second_section_content.clientHeight + 'px';
	motto.style.marginTop = m_h;

	//Kontakt
	const kontakt = document.querySelector('.kontakt');
	let kon_pos = first_img_height + bg_img_first_section.clientHeight
	+first_section_content.clientHeight + bg_img_second_section.clientHeight
	+second_section_content.clientHeight + motto.clientHeight + 'px';
	kontakt.style.marginTop = kon_pos;
*/	

	// ############################# //
	const tab = document.querySelectorAll('.test');
	console.log(tab);
	
	let tab_len = tab.length;
	console.log("tab_len: "+ tab_len);

	let x = 0;
	let arr_height = [first_img_height];
	let total_height = 0;

	
	for(x; x < tab_len; x++){
	    //let height = tab[x].clientHeight;
	    //arr_height.push(height);
	    total_height = arr_height.reduce((a,b) => a + b, 0);
	    t_h_px = total_height + 'px';
	    console.log(arr_height);
	    console.log(total_height);
	    console.log(t_h_px);
	    tab[x].style.marginTop = t_h_px;
	    let height = tab[x].clientHeight;
	    arr_height.push(height);

	}



    }

// WYWOŁANIA FUNKCJI PO ZAŁADOWANIU STRONY

    set_pos();

window.addEventListener('resize', function(e){

// WYWOŁANIA FUNKCJI DLA ZMIANY ROZMIARU OKNA PRZEGLĄDARKI
    set_pos();

});
});
