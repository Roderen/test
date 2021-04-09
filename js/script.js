function widtth() {
	const sw = window.screen.width
	const intro = document.querySelector('.intro__img');

	if (sw <= 1024) {
		intro.src = "img/intro/2.png";
	}
}

widtth();

function close() {
	document.querySelector('.close').addEventListener('click', () => {
		let x = document.querySelector('.burger__nav');
		x.classList.remove('burger__nav-active');
		setTimeout(() => overflow(), 800);
	});
}

function overflow() {
	let y = document.querySelector('.header');
	y.style.overflow = 'hidden';
}

close();

function open() {
	document.querySelector('.burger__btn').addEventListener('click', () => {
		let x = document.querySelector('.burger__nav');
		let y = document.querySelector('.header');
		if (x.classList.contains('.burger__nav-active')) {
			x.classList.remove('burger__nav-active')
		} else {
			y.style.overflow = 'visible';
			x.classList.add('burger__nav-active')
		}
	});
}

open();
