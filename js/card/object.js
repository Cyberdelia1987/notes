var Cards = {};

Cards.Object = Class.extend({
	_card_data : null,
	_view: null,
	init: function(card_data) {
		this._assignDefaultCardData();
		$.extend(true, this._card_data, card_data);
		this.renderView();
	},
	_assignDefaultCardData : function() {
		this._card_data = {
			id: null,
			title: '',
			description: '',
			position: 0,
			cover: null,
			comments: [],
			badges: {},
			attachments: []
		};
	},
	renderView: function() {
		this._view = $('<div class="card" id="0">'
		+'<div class="card-title"></div>'
		+'<div class="card-body-wrapper">'
		+'	<div class="card-body"></div>'
		+'	<div class="card-controls">'
		+'		<button class="btn btn-default edit"><i class="fa fa-pencil"></i></button>'
		+'		<button class="btn btn-default track-time"><i class="fa fa-clock-o"></i></button>'
		+'		<button class="btn btn-default remove"><i class="fa fa-trash-o"></i></button>'
		+'	</div>'
		+'</div>'
		+'<div class="card-badges"></div>'
		+'<div class="resizer"></div>'
		+'</div>');

		this._populate();
	},
	getRenderedView: function() {
		return this._view;
	},
	_populate: function() {
		this._view.attr('id', this._card_data.id);
		this._view.find('.card-title').html(this._card_data.title);
		this._view.find('.card-body').html(this._card_data.description);

		if (this._card_data.cover) {
			this._view.find('.card-body-wrapper').prepend('<div class="header-image-wrapper"><img class="full-width" src="'+this._card_data.cover+'" alt=""/></div>');
		}

		var badges_placeholder = this._view.find('.card-badges');
		for (var badge_alias in this._card_data.badges) {
			var badge_params = this._card_data.badges[badge_alias];

			if (typeof this['_badge_'+badge_alias] != 'function') continue;

			var badge = this['_badge_'+badge_alias](badge_params);
			if (!badge) continue;

			badges_placeholder.append(badge).append(' ');
		}
	},
	_badge_view: function(watching) {
		if (!watching) return null;
		return $('<span class="label label-default"><i class="fa fa-eye"></i></span>');
	},
	_badge_comments: function(count) {
		if (count < 1) return null;
		return $('<span class="label label-default"><i class="fa fa-comments-o"></i> '+count+'</span>');
	},
	_badge_list: function(params) {
		if (typeof params.total == 'undefined') return null;
		return $('<span class="label label-default"><i class="fa fa-list"></i> '+params.checked+'/'+params.total+'</span>');
	},
	_badge_attachments: function(count) {
		if (count < 1) return null;
		return $('<span class="label label-default"><i class="fa fa-paperclip"></i> '+count+'</span>');
	},
	_badge_due_date: function(due_date) {
		if (!due_date) return null;
		return $('<span class="label label-default" title="'+due_date+'"><i class="fa fa-clock-o"></i></span>');
	}
});