Cards.Event.Handler.Abstract = Class.extend({
	/**
	 * Объект вьюшки
	 * @type {CfxCalc.View.Abstract}
	 * /
	_view : null,

	/**
	 * Привязать объект View к обработчику
	 * @param {CfxCalc.View.Abstract} view
	 * /
	bindView : function(view) {
		this._view = view;
		return this;
	},
	/**
	 * Получить объект вьюшки
	 * @returns {CfxCalc.View.Abstract}|null
	 * /
	getView : function() {
		return this._view;
	},*/
	/**
	 * Обработать нотификацию о возникновении события
	 * @param {*} data - Данные
	 * @param {string} event_name - Имя эвента
	 * @param {bool} only_update_data - Обработчик должен только обновить внутренние данные, без отправки запросов или обработки сложной логики. На совести обработчика
	 */
	handle : function(data, event_name, only_update_data) {}
});