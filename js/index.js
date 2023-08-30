//burger menu

const headerNav = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.menu__btn');

//burger menu

// menuBtn.addEventListener('click', () => {
// 	headerNav.classList.toggle('header__nav-active');

// });

// Закрытие бургер меню при нажатии клавиши escape

document.addEventListener('keyup', function(event) {
		if(event.code === "Escape") {
		headerNav.classList.remove('header__nav-active');
	}
})

// Открытие и Закрытие бургер меню при нажатии на документ вне меню

document.addEventListener('click', menu);

function menu(event) {
	if(event.target.closest('.menu__btn')) {

		headerNav.classList.toggle('header__nav-active');

	};
	if(!event.target.closest('.menu__btn')) {

		headerNav.classList.remove('header__nav-active');

	}
}


// header fixed...........

window.onscroll = function showHeader() {
	let header = document.querySelector('.header');
	if (window.scrollY > 200) {
		header.classList.add('header__fixed');
	} else {
		header.classList.remove('header__fixed')
	}
}

// header fixed padding...........


let m = document.querySelector(".main");
let h = document.querySelector(".header");
let hHeight;

function setTopPadding() {
  hHeight = h.offsetHeight;
  m.style.paddingTop = hHeight + "px";
}


window.onload = function() {
  setTopPadding();
};

window.onresize = function() {
  setTopPadding();
};