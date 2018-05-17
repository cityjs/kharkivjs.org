var scheduledDaysMeny = document.querySelectorAll('.scheduledDaysMenu ul li');
var scheduledDays = document.querySelectorAll('.scheduledDaysContent .scheduledDay');

var currentIndex = 0; // active day by default
var changeActs = function(currentIndex, el, index){
	index === currentIndex ? el.classList.add('act') : el.classList.remove('act');
};

scheduledDaysMeny.forEach(changeActs.bind(null, currentIndex));
scheduledDays.forEach(changeActs.bind(null, currentIndex));

scheduledDaysMeny.forEach(function(el) {
	el.addEventListener('click', function(e) {
		var currentIndex = Array.from(e.currentTarget.parentNode.children).indexOf(el);

		scheduledDaysMeny.forEach(changeActs.bind(null, currentIndex));
		scheduledDays.forEach(changeActs.bind(null, currentIndex));
	});
});


var topMenuItem = document.querySelector('.mainMenu');

topMenuItem.addEventListener('click', function(e, el) {

	e.preventDefault();

	if(e.target.nodeName !== 'A') {
		return;
	}

	var dataId = e.target.dataset.id;

	if(dataId === 'up') {
		document.querySelector(`#speakerDest`).scrollIntoView({ 
	  		behavior: 'smooth' 
		});
		return;
	}

	var allAnchors = topMenuItem.querySelectorAll('li');
	allAnchors.forEach(function(a){ return a.classList.remove('act')});

	var target = e.target;
	target.parentNode.classList.add('act');

	var scrollTarget = document.querySelector(`#${dataId}Dest`);

	scrollTarget.scrollIntoView({
		behavior: 'smooth'
	});
});





var ElMobileMenu = document.querySelector('.mobileMenu');
var ElCloseMobileMenu = document.querySelector('.closeMobileMenu');
var ElBtnSandwich = document.querySelector('.btnSandwich');

ElCloseMobileMenu.addEventListener('click', function() {
	ElMobileMenu.classList.remove('act');
	document.body.style.overflow = '';
});

ElBtnSandwich.addEventListener('click', function() {
	ElMobileMenu.classList.add('act');
	document.body.style.overflow = 'hidden';
});
