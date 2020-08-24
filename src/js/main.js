document.addEventListener('DOMContentLoaded', function(){ 
	
	const imgPathArr = [
		'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1598113571597-3a3d9c70b8c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1597987913761-edec154bbd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1598181780484-9a58d58496fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1598146635303-dd566d5e3ac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	]
	let count = imgPathArr.length
	const cover = document.querySelector('.cover')

	function randomInteger(min, max) {
	  let rand = min - 0.5 + Math.random() * (max - min + 1);
	  return Math.round(rand);
	}

	function shuffle(array) {
	  array.sort(() => Math.random() - 0.5);
	}

	function init(){
		shuffle(imgPathArr)
		imgPathArr.forEach(function(elem, index){
			let card = document.createElement('div')
			card.classList.add('card')
			card.style.background = `url('${imgPathArr[index]}')`
			card.style.backgroundSize = 'cover'
			card.style.transform = `rotate(${randomInteger(-15, 15)}deg)
															translate(${randomInteger(-40, 40)}px , ${randomInteger(-0,40)}px)`
			cover.append(card)
		})
	}
	init()
	cover.addEventListener('click', event =>{
		event.target.classList.contains('card') ? (event.target.classList.add('go'),
																								count--,
																								(count==0?(
																									cover.innerHTML = "",
																									init(), 
																									count =  imgPathArr.length)
																								: true)
																							)
																						: false																									
	})





})