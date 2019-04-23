window.addEventListener('load', function(){
	let links = document.querySelectorAll('nav ul li');

	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('mouseover', function(){
			this.classList.add('nav-highlight');
		});
		links[i].addEventListener('mouseleave', function(){
			this.classList.remove('nav-highlight');
		});
	}
});