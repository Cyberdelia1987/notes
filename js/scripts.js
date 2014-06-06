$(document).ready( function ()
{
	var $masonry = $('.cards-container');

	$masonry.sortable({
		distance: 12,
		forcePlaceholderSize: true,
		items: '.card',
		placeholder: 'card-sortable-placeholder card',
		tolerance: 'pointer',

		start: function(event, ui) {
			ui.item.addClass('dragging');
		},
		change: function(event, ui) {
		},
		stop: function(event, ui) {
			ui.item.removeClass('dragging');
		}
	});

	function saveTitles () {
		$('.card-title.editing').each(function(){
			var elem = $(this);
			elem.html(elem.find('textarea').val()).removeClass('editing')
		});
	}

	$('.card .size-changer').click(function(e){
		e.stopPropagation();
		e.preventDefault();
	});

	for (var i in cards) {
		var card_object = new Cards.Object(cards[i]);
		$masonry.append(card_object.getRenderedView());
	}

	$('.card .card-title').click(function(e){
		var elem = $(this);

		e.stopPropagation();
		e.preventDefault();

		if (elem.hasClass('editing'))  return;
		else saveTitles();

		var contentString = elem.html();

		elem.addClass('editing');
		var textarea = $('<textarea>'+contentString+'</textarea>');
		elem.html(textarea);
		textarea.focus();
	});

	$(window).click(function(){ saveTitles() });

	$('.slimscroll').each(function(){
		var elem = $(this),
			height = elem.data('slimscrollHeight');

		if (!height) height = null;
		elem.slimScroll({
			height: height,
			railVisible: true,
			alwaysVisible: true
		});
	});

	$.ajax({
		url: 'http://api.randomuser.me/',
		dataType: 'json',
		success: function(data){
			var userName = ucfirst(data.results[0].user.name.first)+' '+ucfirst(data.results[0].user.name.last);

			$('.userpannel .username').html(userName);
			$('.userpannel .userpic').attr('src', data.results[0].user.picture);
		}
	});

	function ucfirst(str) {
		str += '';
		var f = str.charAt(0).toUpperCase();
		return f + str.substr(1);
	}

	if (value = getFromLocalStorage('cards_style')) {
		$('.cards-container').addClass(value);
		switch (value) {
			case 'cards-masonry' : $('.cards-type i').attr('class', $('.notes-as-cards i').attr('class')); break;
			case 'cards-list' : $('.cards-type i').attr('class', $('.notes-as-list i').attr('class')); break;
		}
	} else {
		$('.cards-container').addClass('cards-masonry');
	}

	$('.notes-as-list').click(function(){
		var elem = $(this),
			iClass = elem.find('i').attr('class');

		elem.closest('.dropdown').find('.cards-type i').attr('class', iClass);

		$('.cards-container').removeClass('cards-masonry').addClass('cards-list');
		writeToLocalStorage('cards_style', 'cards-list');
	});

	$('.notes-as-cards').click(function(){
		var elem = $(this),
			iClass = elem.find('i').attr('class');

		elem.closest('.dropdown').find('.cards-type i').attr('class', iClass);

		$('.cards-container').removeClass('cards-list').addClass('cards-masonry');
		writeToLocalStorage('cards_style', 'cards-masonry');
	});


	function writeToLocalStorage (name, value) {
		if (typeof window.localStorage == 'undefined') return;

		window.localStorage.setItem(name, value);
	}

	function getFromLocalStorage(name) {
		if (typeof window.localStorage == 'undefined') return;

		return window.localStorage.getItem(name);
	}
});
