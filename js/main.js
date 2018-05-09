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
