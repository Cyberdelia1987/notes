Cards.Event = {
	Handler : {}
};

Cards.EventManager = Class.extend({
	_handlers : {},
	/**
	 * Добавить обработчик на событие
	 * @param {string} event_name - Строковое имя события
	 * @param {Cards.Event.Handler.Abstract|function} handler - Функция или специализированный объект-обработчик
	 * @param {number} priority - Приоритет вызова. По умолчанию - 100
	 */
	bind : function(event_name, handler, priority) {
		if (typeof event_name != 'string') {
			console.error('Event name must be a string');
			return;
		}
		if (typeof handler != 'function' && !(handler instanceof Cards.Event.Handler.Abstract)) {
			console.error('Handler must be a valid callback or an instance of Cards.Event.Handler.Abstract');
			return;
		}

		if (typeof priority == 'undefined') priority = 100;
		if (typeof priority != 'number') {
			console.error('Argument "priority" must be an integer, "'+typeof(priority)+'" given');
			return;
		}

		if (typeof this._handlers[event_name] != 'object') {
			this._handlers[event_name] = {};
		}
		if (typeof this._handlers[event_name][priority] != 'object') {
			this._handlers[event_name][priority] = [];
		}

		this._handlers[event_name][priority].push(handler);
	},
	/**
	 * Вызов подписавшихся на события обработчиков
	 * @param {string} event_name - Имя события, обработчиков которого нужно оповестить
	 * @param {*} data - Данные, которые нужно передать обработчику
	 * @param {bool} only_update_data - Только одновить данные, не вызывая обработку. Остается на совести обработчика
	 */
	notify : function(event_name, data, only_update_data) {
		if (typeof this._handlers[event_name] != 'object') return;

		for (var priority in this._handlers[event_name]) {
			for (var handler_number in this._handlers[event_name][priority]) {
				var handler = this._handlers[event_name][priority][handler_number];
				if (typeof handler == 'function') {
					handler(data, event_name, only_update_data);
				} else if (handler instanceof CfxCalc.Event.Handler.Abstract) {
					handler.handle(data, event_name, only_update_data);
				} else {
					console.error('Wrong handler provided');
				}
			}
		}
	}
});