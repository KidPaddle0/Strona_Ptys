window.addEventListener('load', function(e){

const navbar = document.querySelector('nav');
const welcomeImg = document.querySelector('.layer-03');

const welcomeImgOptions = {
    rootMargin: "-100px 0px 0px 0px" 
}

const welcomeImgObserver = new IntersectionObserver
    (function(
	entries,
	welcomeImgObserver
    ) {
	entries.forEach(entry => {
	    if(!entry.isIntersecting){
		navbar.classList.add('is-scrolled');
	    } else {
		navbar.classList.remove('is-scrolled');
	    }
	});
    }, 
    welcomeImgOptions);

    welcomeImgObserver.observe(welcomeImg);
})
