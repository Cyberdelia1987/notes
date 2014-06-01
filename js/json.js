var cards = [
	{
		id: 1,
		title: 'Индонезийская кухня',
		description: 'Индонезийская кухня (индон. Masakan Indonesia) — совокупность кулинарных традиций народов, населяющих Республику Индонезию. Отличается большим разнообразием: в её рамках традиционно выделяется несколько основных региональных кухонь, значительно различающихся между собой. При этом некоторые блюда, изначально присущие исключительно определённым народам или местностям, со временем приобретают общенациональную популярность.',
		position: 1,
		cover: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Javanese_dinner.JPG/1920px-Javanese_dinner.JPG',
		badges: {
			view: true,
			comments: 5,
			list: {
				checked: 3,
				total: 5
			},
			attachments: 1,
			due_date: '2014/07/12'
		}
	},
	{
		id: 2,
		title: 'Пьеве-ди-Кориано',
		description: 'Пьеве-ди-Кориано (итал. Pieve di Coriano) — коммуна в Италии, располагается в регионе Ломбардия, в провинции Мантуя.',
		position: 2,
		cover: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Italy_location_map.svg/280px-Italy_location_map.svg.png',
		badges: {
			comments: 5,
			attachments: 4
		}
	},
	{
		id: 3,
		title: 'Герде, Оскар',
		description: 'Оскар Герде (венг. Gerde Oszkár; 8 июля 1883, Будапешт, Австро-Венгрия, — 8 октября 1944, Маутхаузен, Германия) — австро-венгерский фехтовальщик еврейского происхождения, олимпийский чемпион 1908 и 1912 годов.',
		position: 3,
		badges: {
			view: true,
			comments: 5,
			list: {
				checked: 3,
				total: 5
			},
			attachments: 1,
			due_date: '2014/07/12'
		}
	},
	{
		id: 4,
		title: 'Университет Нью-Гэмпшира',
		description: 'Университет Нью-Гэмпшир (англ. University of New Hampshire, UNH) — государственный университет и исследовательский центр, входящий в унверситетскую систему Нью-Гэмпшир, США. Входит в университетскую систему Нью-Гэмпшира. Основной кампус находится в Дарем, Нью-Гэмпшир, дополнительный — в Манчестере, Нью-Гэмпшир. С 15 000 студентов университет является крупнейшим в штате. А также одним из девяти университетов-получателей земельных, морских и аэрокосмических грантов. С 1 июля 2007 года Марк Хаддлстон стал 19-м президентом университета.',
		position: 4,
		cover: 'http://upload.wikimedia.org/wikipedia/ru/thumb/5/50/UNewHampshire_seal.png/170px-UNewHampshire_seal.png',
		badges: {
			comments: 5,
			attachments: 9,
			due_date: '2014/07/12'
		}
	},
	{
		id: 5,
		title: 'Ламентация',
		description: 'Ламентация (плач, стенание) — первоначально возникший в античной риторике прием ораторского искусства. Происходит от латинского lamentatio — «плач, рыдание».',
		position: 5,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 6,
		title: 'Частотно-контрастная характеристика',
		description: 'Часто́тно-контра́стная характери́стика, функция передачи модуляции в полиграфии, оптике, фотографии и т. п. — один из параметров, характеризующих качество системы, воспроизводящей изображения (такими системами, в частности, являются оптические приборы и светочувствительные материалы).',
		position: 6,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 7,
		title: 'Орёл — Ефремов (автодорога)',
		description: 'Автодорога Орёл — Ефремов — автомобильная дорога общего пользования регионального значения Орёл — Новосиль — Ефремов. На территории Орловской области имеет учётный номер 54А-1[1], на территории Тульской области — 70К-124[2]. До 31 декабря 2017 года допускается использование прежнего обозначения дороги Р120.',
		position: 7,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 8,
		title: 'Коричневохвостая амазилия',
		description: 'Коричневохвостая амазилия[1] (лат. Amazilia tzacatl) — птица из семейства колибри (Trochilidae).',
		position: 8,
		cover: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rufous-tailed_Hummingbird.jpg/265px-Rufous-tailed_Hummingbird.jpg',
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 9,
		title: 'Добринский район',
		description: 'Добринский район — административная единица на юго-востоке Липецкой области России. Административный центр — посёлок Добринка.',
		position: 8,
		cover: 'http://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Dobrinka_rayon_%28Lipetsk_oblast%29.png?uselang=ru',
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 10,
		title: 'Желехув',
		description: 'Желе́хув (польск. Żelechów, МФА: ʐɛlɛxuf) — город в Мазовецком воеводстве Польши, расположенный примерно в 85 км от Варшавы. Население составляет 4000 жителей.',
		position: 8,
		cover: 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%C5%BBelech%C3%B3w_-_city_hall.jpg/200px-%C5%BBelech%C3%B3w_-_city_hall.jpg',
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 11,
		title: 'Гафиатуллин, Газинур Гафиатуллович',
		description: 'Газинур Гафиатуллин родился в деревне Сугушла Лениногорского района. Отбывал воинскую службу в царской армии. Вскоре началась война и его часть отправили на Кавказ. Эшелон, в котором он ехал, попал в крушение.',
		position: 8,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 12,
		title: 'Лагуна-Верде (озеро, Потоси)',
		description: 'Лагуна-Верде[1] (исп. Laguna Verde, в переводе «зелёная лагуна») — минеральное озеро, расположенное у границы с Чили, в юго-западной части Боливии.',
		cover: 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Licancabur_Green_Lake.jpg/280px-Licancabur_Green_Lake.jpg',
		position: 8,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 13,
		title: 'Лонг Хоул (трансформер)',
		description: 'Лонг Хоул (англ. Long Haul, в русской телевизионной версии 6-го канала — Большегру́з[1]) — персонаж вымышленной «Вселенной трансформеров», действующее лицо нескольких мультсериалов и комиксов, а также фильмов о трансформерах. Принадлежность — Десептикон. Подгруппа — конструктиконы. Специализация — транспорт и снабжение.',
		cover: 'http://upload.wikimedia.org/wikipedia/ru/thumb/2/24/Long_Haul_G1.jpg/230px-Long_Haul_G1.jpg',
		position: 8,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 14,
		title: 'Вид Дельфта',
		description: '«Вид Дельфта» (нидерл. Gezicht op Delft) — одна из наиболее известных картин нидерландского художника Яна Вермеера, на которой изображен родной для Вермеера город Дельфт. Является одной из самых больших по размеру картин художника и одним из двух его пейзажей.',
		cover: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/300px-Vermeer-view-of-delft.jpg',
		position: 8,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	},
	{
		id: 15,
		title: 'Юго-восток штата Риу-Гранди-ду-Сул (мезорегион)',
		description: 'Юго-восток штата Риу-Гранди-ду-Сул (порт. Mesorregião do Sudeste Rio-Grandense) — административно-статистический мезорегион в Бразилии, входит в штат Риу-Гранди-ду-Сул. Население составляет 942 938 человек на 2005 год. Занимает площадь 42 539,655 км². Плотность населения — 22,2 чел./км².',
		cover: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/RioGrandedoSul_Meso_SudesteRioGrandense.svg/300px-RioGrandedoSul_Meso_SudesteRioGrandense.svg.png',
		position: 8,
		badges: {
			view: true,
			list: {
				checked: 3,
				total: 5
			},
			due_date: '2014/07/12'
		}
	}
];