window.addEventListener('load', () => {

const gallery = document.querySelector(".karuzela");
const karuzela = document.querySelectorAll('.karuzela img');

const nextBtn = document.querySelector('#nextImg');
const prevBtn = document.querySelector('#prevImg');

let counter = 1;
const size = karuzela[0].clientWidth;

gallery.style.transform = 'translateX(' + (-size * counter) + 'px)';

//### buttons ###//

nextBtn.addEventListener('click', () => {
	gallery.style.transition = 'transform 0.4s ease-in-out';
	counter++;
	gallery.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; 
	gallery.style.transition = 'transform 0.4s ease-in-out';
	counter--;
	gallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

gallery.addEventListener('transitionend', () => {
    console.log(karuzela[counter]);
    if (karuzela[counter].id === 'cloneOfLast'){
	console.log(karuzela[counter]);
	gallery.style.transition = 'none';
	counter = karuzela.length -6;
	console.log(counter);
	gallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
	
    }
    if(karuzela[counter].id === 'lastImg'){
	console.log(karuzela[counter]);
	gallery.style.transition = 'none';
	counter = karuzela.length - counter;
	console.log(counter);
	gallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

});
