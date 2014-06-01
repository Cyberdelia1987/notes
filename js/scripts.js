$(document).ready( function ()
{
	var $masonry = $('.cards-masonry');

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
});