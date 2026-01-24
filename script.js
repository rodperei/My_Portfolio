function showVertbar(){
	const vertbar = document.querySelector('.vertbar')
	vertbar.style.display = 'flex'
}

function hideVertbar(){
	const vertbar = document.querySelector('.vertbar')
	vertbar.style.display = 'none'
}

document.querySelector(".email").addEventListener('click', function(e){
	e.preventDefault();
	
	window.location.href = 'mailto:rfalmada7@gmail.com';
});
