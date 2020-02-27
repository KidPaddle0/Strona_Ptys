window.addEventListener('load', function(e){

    // ### smooth scroll ### //
    document.getElementById('ONas_menu').addEventListener('click', function(e){
	const element = document.querySelector('.first_img');
	
	let scrolled = window.pageYOffset;
	let pos = scrolled * -0.2

	let el = window.getComputedStyle(element);
	let position = parseFloat(el.marginTop);

	scrollTop = window.scrollTo(0, position);
    });
    document.getElementById('Oferta_menu').addEventListener('click', function(e){
        const element = document.querySelector('.bg_image_s2');
        let el = window.getComputedStyle(element);

	let scrolled = window.pageYOffset;
	let pos = scrolled * 0.2;
	console.log(pos);

        let position = parseFloat(el.marginTop);
        scrollTop = window.scrollTo(0, position);
	console.log(element.offsetTop);
    });
    document.getElementById('Kontakt_menu').addEventListener('click', function(e){
        const element = document.querySelector('.kontakt');
        let el = window.getComputedStyle(element);
        let position = parseFloat(el.marginTop);
        scrollTop = window.scrollTo(0, position);
    });

   
    function set_pos(){
	// Zaczytanie wysokości pierwszego obrazka
	const first_img = document.querySelector('.layer-00');
	let first_img_height = first_img.clientHeight;

	// ustawianie elementów do parallaxa
	const parallax_layers = document.querySelectorAll('.ciasto');
	let len = parallax_layers.length;
	let index = 0;
	for(index; index < len; index++){
	    let pos = first_img_height - parallax_layers[index].clientHeight + 'px'
	    parallax_layers[index].style.marginTop = pos;
	}

	const add_block = document.querySelector('.layer-04');
	let add_height = add_block.clientHeight;
	let set_pos = first_img_height + 'px';
	add_block.style.marginTop = set_pos;

	// ############# Ustawianie elemnetów strony ################ //
	const tab = document.querySelectorAll('.position');
	
	let tab_len = tab.length;

	let x = 0;
	let arr_height = [first_img_height];
	let total_height = 0;

	
	for(x; x < tab_len; x++){
	    let total_height = arr_height.reduce((a,b) => a + b, 0);
	    let t_h_px = total_height + 'px';
	    tab[x].style.marginTop = t_h_px;
	    let height = tab[x].clientHeight;
	    arr_height.push(height);
	}
    }

    function set_title(){
	// ### O nas ### //
	const title_img_s1 = document.querySelector('.first_img');
	const title_s1 = document.querySelector('.first_title');
	let styles_s1 = window.getComputedStyle(title_img_s1);
	let marginTop_s1 = parseFloat(styles_s1.marginTop);
	let set_title_s1 = marginTop_s1 + title_img_s1.clientHeight / 2 - title_s1.clientHeight / 2+ 'px';
        title_s1.style.marginTop = set_title_s1;
	let set_title_s1_w = title_img_s1.clientWidth / 2 - title_s1.width / 2 + 'px';
        title_s1.style.marginLeft = set_title_s1_w;

	// ### Oferta ### //
	const title_img_s2 = document.querySelector('.bg_image_s2');
	let styles_s2 = window.getComputedStyle(title_img_s2); 
	let marginTop_s2 = parseFloat(styles_s2.marginTop);
	const title_s2 = document.querySelector('.title_s2');
	let set_title_s2 = marginTop_s2 + title_img_s2.clientHeight / 2 - title_s2.clientHeight / 2+'px';
	title_s2.style.marginTop = set_title_s2;
	let set_title_s2_w = title_img_s2.clientWidth / 2 - title_s2.width / 2 + 'px';
	title_s2.style.marginLeft = set_title_s2_w;

	// ### Motto ### //
	const motto_bg = document.querySelector('.motto2');
	const motto = document.querySelector('.motto_title');
	let h = motto_bg.clientHeight / 2 - motto.clientHeight / 2 + 'px';
	motto.style.marginTop = h;
	let w = motto_bg.clientWidth / 2 - motto.clientWidth / 2 + 'px';
	motto.style.marginLeft = w;
    }

// WYWOŁANIA FUNKCJI PO ZAŁADOWANIU STRONY

    set_pos();
    set_title();

window.addEventListener('resize', function(e){

// WYWOŁANIA FUNKCJI DLA ZMIANY ROZMIARU OKNA PRZEGLĄDARKI
    set_pos();
    set_title();

});
});
