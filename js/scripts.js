$(document).ready( function ()
{
	var $masonry = $('.masonry');

	$masonry.masonry({
		itemSelector: '.card',
		isResizable: true
	});

	$masonry.sortable({
		distance: 12,
		forcePlaceholderSize: true,
		items: '.card',
		placeholder: 'card-sortable-placeholder card',
		tolerance: 'pointer',

		start: function(event, ui) {
			ui.item.addClass('dragging');
			ui.item.parent().masonry('reload')
		},
		change: function(event, ui) {
			ui.item.parent().masonry('reload');
		},
		stop: function(event, ui) {
			ui.item.removeClass('dragging');
			ui.item.parent().masonry('reload');
		}
	});

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

	function saveTitles () {
		$('.card-title.editing').each(function(){
			var elem = $(this);
			elem.html(elem.find('textarea').val()).removeClass('editing')
		});
	}
});