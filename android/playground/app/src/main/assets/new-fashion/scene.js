/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/41333d527ccae7db33e37491c3583a26", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(15);

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      NUMBER_186: 186,
	      NUMBER_206: 206,
	      NUMBER_373: 373,
	      NUMBER_230: 230,
	      NUMBER_170: 170,
	      NUMBER_100: 100,
	      NUMBER_750: 750,
	      NUMBER_300: 300,
	      NUMBER_340: 340,
	      smallItemBg: 'https://gw.alicdn.com/tps/TB1oBIeLVXXXXatXpXXXXXXXXXX-373-230.jpg',
	      items: [],
	      smallItems: [],
	      sceneBgs: [
	        'https://gw.alicdn.com/tps/TB1xBT8LVXXXXbYXVXXXXXXXXXX-750-340.jpg',
	        'https://gw.alicdn.com/tps/TB1RoEkLVXXXXaMXpXXXXXXXXXX-750-340.jpg',
	        'https://gw.alicdn.com/tps/TB1DiEpLVXXXXa7XXXXXXXXXXXX-750-340.jpg'
	      ]
	    }},
	    methods: {
	      ready: function () {
	        var self = this;
	        self._loadData();
	      },

	      _loadData: function () {
	        var self = this;
	        var content = [{
	          "id": "1111",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1392&scm=1003.1.03653.SUB_1111_740603&pos=1",
	          "_s_": "d",
	          "itemImg": "https://img.alicdn.com/tps/TB1c7t.MXXXXXchXXXXXXXXXXXX-182-206.jpg",
	          "sceneCat": "50012010,50012027,50012032,50007003,50008881,50008883,1623,162116,50010850,123216004",
	          "finalScore": "10000.0",
	          "_pos_": "1",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/TB1Zgl2MXXXXXaYXFXXXXXXXXXX-170-100.png"
	        }, {
	          "id": "1396",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1396&scm=1003.1.03653.SUB_1396_740603&pos=2",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i2/TB1O1VfMXXXXXX0aXXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50010368,50011892,50011894,50013794,50010792,50010790,50010790,121434025,121396024,50010793,50010789,50010793,121386035,121392037,121458034,121392036,121482027,121392015,121368014,121418013,121392016,50011982,122690003,302910,50012010,122654005,50012019,50012825,50012027,50012042,50011744,50012906,50012907,50008881,50008883,50008882?,50012784?,50022889,50022728,50013228,50013896,50014775,50019578,50014822,50026394,50019694,50019279,50019272,50014079,50014078,50014076,50014077,50017238,121464011,121468014,50019130,50019127,50019126,50019128,50019125,50015984,50014803,50014802,50015980,50014788,50014787,50019526,50014791,50019520,50013932,50014677,50015978,50014786,50014785,50522001,50014493,50023100,121418021,121388027,121424021,121418020,121368020,50012036,50012044,50012043,50010368, 50011892, 50019274,50012044,50012048,50012043,50013228,50013238,50011726,50019279,50015984,50014803,50014802,50019526,50014791,50019520,50013932,50014677,50019526,50013314,50023341,50016752,50016749,50016747,50016744,50016741,50016740,50016739,50016738,50016737,50016769,50016763,50016750,50007003,302910,50012010,50012032,50012033,50011745,50011746,50011894,121458034,121756003,121426033,50011982,50011979,121390006,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,162402,50008903,50011413,162403,50000697,1629,50011277,121412004,50008897,50008901,50008899,50013194,50008904,50008905,50008898,162103,50008900,50013196,121434004,50005065,162702,162701,162703,1636,1512,123534001,14,50008090,50012341,50132002,50012342,50012343,50012345,50012346,50013189,50010527,121394006,50013618,50010537,50012424,121452038,121484044,50010540,50010548,50024769,121450007,50013697,50010218,50005960,50005962,50012820,50012406,50023620,50023605,50008829,50024064,50023440,50008687,124392001,50023771,50006804,50012410,124482010,121398023,50023789,50011975",
	          "finalScore": "10000.0",
	          "_pos_": "2",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i1/TB1cp4sMXXXXXbLXFXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1616",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1616&scm=1003.1.03653.SUB_1616_740603&pos=3",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i4/TB1dlEALVXXXXbxXpXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50009032,50007003,302910,1512,124688012,124986002,124942005,50023722,50010368,50011892,50011894",
	          "finalScore": "10000.0",
	          "_pos_": "3",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i3/TB1fxonLVXXXXXUaXXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "16424",
	          "sceneUrl": "https://brand.tmall.com/mobilestreet/subject.htm?id=16424&acm=03653.1003.1.740603&aldid=VyrSqx06&spm=0.0.0.0.Wv8ion&scm=1003.1.03653.SUB_16424_740603&pos=4",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i4/TB1.i2_LVXXXXbrXpXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50012043,50012036,50010850,50000671,1622,50000852,162104,50000697,162205,162116,50012027,50012032,50012028,50012033,50012042,50008882,50012772,50006846,50008881,50000436,50011123,3035,50010167,50000557,50010158,50010159,50010402,50010160,50011980,50011993,121390006,50011978,50011977,50011979,121454013,50011745",
	          "finalScore": "6.729749999999999",
	          "_pos_": "4",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i2/TB1bhH5LVXXXXapXFXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "16425",
	          "sceneUrl": "https://brand.tmall.com/mobilestreet/subject.htm?id=16360&acm=03653.1003.1.740603&aldid=VyrSqx06&spm=0.0.0.0.MttFEC&scm=1003.1.03653.SUB_16425_740603&pos=5",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i3/TB15ywbLVXXXXcdXXXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50012043,50012036,50010850,50000671,1622,50000852,162104,50000697,162205,162116,50012027,50012032,50012028,50012033,50012042,50008882,50012772,50006846,50008881,50000436,50011123,3035,50010167,50000557,50010158,50010159,50010402,50010160,50011980,50011993,121390006,50011978,50011977,50011979,121454013,50011745",
	          "finalScore": "6.729749999999999",
	          "_pos_": "5",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i1/TB1JBLYLVXXXXXlXVXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1625",
	          "sceneUrl": "https://pages.tmall.com/wow/fushi/act/gf-chaoliu?acm=03653.1003.1.740603&aldid=VyrSqx06&scm=1003.1.03653.SUB_1625_740603&pos=6",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/bao/uploaded/i2/TB1Gd21KVXXXXXZXVXXXXXXXXXX_!!0-item_pic.jpg",
	          "sceneCat": "50012043,50012036,50010850,50000671,1622,50000852,162104,50000697,162205,162116,50012027,50012032,50012028,50012033,50012042,50008882,50012772,50006846,50008881,50000436,50011123,3035,50010167,50000557,50010158,50010159,50010402,50010160,50011980,50011993,121390006,50011978,50011977,50011979,121454013,50011982,50011991,50012906,50011744,50011745,50011743,50012907,50011746,50010815,121460005,50013794,122438001,121398006,121386023,50010808",
	          "finalScore": "6.729749999999999",
	          "_pos_": "6",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i3/TB1qxXzMXXXXXcjXFXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1392",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1392&scm=1003.1.03653.SUB_1392_740603&pos=7",
	          "_s_": "d",
	          "itemImg": "https://img.alicdn.com/tps/TB1c7t.MXXXXXchXXXXXXXXXXXX-182-206.jpg",
	          "sceneCat": "50006842,50006840,50008881,50008883,50008882,50008884,50012774,50012775,50012776,50012781,5000888,50012766,50012771,50012772,50010404,50010368, 50011892, 50011894,124688012,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50008882,50008886,50008885,50012777,50012778,50011977,50011978,50011979,50011980,50011982,50011990,50011999,50012000,50011993,50011996,50011997,121366011,121484009,121368010,121390006,121398029,121404030,121404031,121408040,121410035,121412033,121414041,121418013,121454013,121410013,121422013,121484013,50010789,50010790,50010792,50010793,50010794,50010796,50010797,50010798,50010801,50010803,50010805,50010807,50010808,50010815,121410007,121426007,121452004,121460005,50012341,50132002,50012342,50012343,50012345,50012346,50013189,50010527,121394006,50013618,50010537,50012424,121452038,121484044,50010540,50010548,50024769,121366037,121458036,121392038,121420035,121364028,121468026,121472031,121476036,121470042,121418032,121410036,121472032,121420032,121470040,121384032,121460028,121448028,121400030,121424024,121482025,121418031,121402028,121388035,121460029,121400028,121400029,121418030,121476034,121478031,121448029,121480030,121366035,121424025,121426030,121484030,121412031,121384033,121424023,121402027,121408039,121420033,121452028,121466040,121416029,121482028,121420034,121396046,121422052,121370037,121424031,21364043,121472040,121412045,121424032,125054002,125074007,125074008,125104003,125080003,125024006,125080004",
	          "finalScore": "4.4951428571428576",
	          "_pos_": "7",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/TB1Zgl2MXXXXXaYXFXXXXXXXXXX-170-100.png"
	        }, {
	          "id": "1395",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1395&scm=1003.1.03653.SUB_1395_740603&pos=8",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i2/TB1p4NcMXXXXXbGaXXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50008881,50008883,50008882,50008884,50012774,50012775,50012776,50012781,50008886,50012766,50012771,50012772,50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,16240,50012773,50006846,50010394,50008888,50008890,50008889,50012784,50012785,50012786,50012787,50008885,50012777,50012778,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50006843,50006842,124942005,50010368,50011892,50011894,50023751,121366037,121458036,121392038,121420035,121364028,121468026,121400029,121418030,121478031,121480030,121366035,121424025,121426030,121484030,121412031,125054002,125074007,125074008,125104003,125080003,125024006,125080004,121400030,121424024,121482025,121418031,121402028,121388035",
	          "finalScore": "4.465166666666667",
	          "_pos_": "8",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i1/TB1ySNtMXXXXXamXFXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1394",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1394&scm=1003.1.03653.SUB_1394_740603&pos=9",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i4/TB1Ns8eMXXXXXb1aXXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50010850,50000671,162201,50022566,50007068,50026651,50000852,162104,162116,162205,1623,123216004,162404,162401,50011412,50011411,162402,50008903,50011413,162403,50000697,1629,50011277,121412004,50008897,50008901,50008899,50013194,50008904,50008905,50008898,162103,50008900,50013196,121434004,50005065,162702,162701,162703,1636,124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,50011740,50006843,50006842,124986002,50010368, 50011892,50011894,121480030,121366035,121424025,121426030,121484030,121412031",
	          "finalScore": "4.309925925925926",
	          "_pos_": "9",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i3/TB1ZEXfMXXXXXapaXXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1610",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1610&scm=1003.1.03653.SUB_1610_740603&pos=10",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i3/TB1ONckLVXXXXbJaXXXKofZZpXX-182-206.jpg",
	          "sceneCat": "121484044,121452038,50012342,50012027,50012032,50006843,50010850,50000671,162104,1623,50011277,162116,123216004,50008898,121366037,121458036,121392038,121420035,121364028,121468026,121472031,121476036,121470042,121418032,121410036,121472032,121420032,121470040,121384032,121460028,121448028,121400030,121424024,121482025,121418031,121402028,121388035,121460029,121400028,121400029,121418030,121476034,121478031,121448029,121480030,121366035,121424025,121426030,121484030,121412031,121384033,121424023,121402027,121408039,121420033,121452028,121466040,121416029,121482028,121420034,121396046,121422052,121370037,121424031,21364043,121472040,121412045,121424032,125054002,125074007,125074008,125104003,125080003,125024006,125080004",
	          "finalScore": "4.293333333333334",
	          "_pos_": "10",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i2/TB1RzwFLVXXXXXsXpXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1619",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1619&scm=1003.1.03653.SUB_1619_740603&pos=11",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i3/TB1eagyLVXXXXaiXFXXKofZZpXX-182-206.jpg",
	          "sceneCat": "124730001,50001748,50011130,124730001,50001748,50011130,50011129,50010160,50011161,50011159,50010159,50010158,50011127,3035,50010167,50000557,50011123,50010402,50000436,50011153,122654005,50011740,50009032,124688012，213202,121396029,121476023,121410029,213203,50023326,213205,50022686,50023293,50466023,50024999,50016885，50011894",
	          "finalScore": "4.23",
	          "_pos_": "11",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i4/TB1j0AxLVXXXXaRXFXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1613",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1613&scm=1003.1.03653.SUB_1613_740603&pos=12",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i2/TB1WssFLVXXXXXUXpXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50023108,50022893,50022892,50022890,50013228,50019520,50017120,50019560,50017129,50017128,50017127,50017126,50017125,50017124,50017123,50017122,50017121,50020039,50020038,50017119,50019559,50017110,50017108,50017107,50017097,50017096,50017095,50017094,50017093,50017092,50012036,50012041",
	          "finalScore": "4.2186666666666675",
	          "_pos_": "12",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i1/TB1Rg.qLVXXXXbqXVXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1614",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1614&scm=1003.1.03653.SUB_1614_740603&pos=13",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i1/TB1KzUxLVXXXXajXFXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50013238,50011726,50022893,50022892,50022890,50013228,50017129,50020038,50017119,50019559,50017102,50017110,50017097,50019707,50019555,50016677,50018317,50016675,50016673,50016672,50016671,50016670,50016732,50016669,50016668,50016667,50016666,50016665,50016683,50016682,50016608,50016607,50016637,50016638,50012036,50012043",
	          "finalScore": "4.216",
	          "_pos_": "13",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i2/TB1WyouLVXXXXXcXVXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1397",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1397&scm=1003.1.03653.SUB_1397_740603&pos=14",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i4/TB1dCxvMXXXXXc1XpXXKofZZpXX-182-206.jpg",
	          "sceneCat": "122846004,50020776,50024799,50024801,50024921,50002794,50020778,50002792,50002791,50002793,50003942,50005500,50005497,50001692,50005495,50005496,50005503,50005498,50005499,50005501,50005502,50003455,50003457,122904003,50023091,50020770,50008863,50005507,121414011,50020768,50022701,50008862,121420012,50020766,50020764,121398012,121380011,50020751,50020676,50024945,50020720,50002790,50020730,50001866,50020678,121476008,121458013,50002795,121364011,50005505,121422014,50024943,50000583,50000582,50000584,213002,50005033,50000563,50008607,50006988,50008608,50024601,50024602,50012051,50001871,122854005,121458010,121452006,121416008,50008779,50002777,121394007,121386009,50010825,50013810,121434010,50001865,50008565,50008246,50017192,121404045,121368009,121462014,50019372,50008248,121418011,50008249,50017193,50008252,50008251,50000512,121364047,122846004,50020776,50024799,50024801,50024921,50002794,50020778,50002792,50002791,50002793,50003942,50005500,50005497,50001692,50005495,50005496,50005503,50005498,50005499,50005501,50005502,50003455,50003457,122904003,50023091,50020770,50008863,50005507,121414011,50020768,50022701,50008862,121420012,50020766,50020764,121398012,121380011,50020751,50020676,50024945,50020720,50002790,50020730,50001866,50020678,121476008,121458013,50002795,121364011,50005505,121422014,50024943,50000583,50000582,50000584,213002,50005033,50000563,50008607,50006988,50008608,50024601,50024602,50012051,50020835,50021907,121472021,50021902,50005919,50002045,122724003,122652007,121408025,122688004,50021924,50021923,50000561,50011738,122676005,121396026,121388028,50003338,50021915,50011415,50011416,50003454,50021928,50021930,50021929,50021931,50024939,121384024,121472020,50020902,50020903,50020904,50020905,50021888,50021889,50021890,50023266,122960005,50012001,50011999,50012004,50012000,50012006,121394024,121412033,121394025,121450036,121472007,121480009,121388013,121466009,121484012,121366014,121434014,121422012,121476006,121396013,50011997,121434013,122646001,121458012,121468012,121368013,50011979,121366015,121406016,121456012,121366011,121414010,121460006,121368014,121388016,121396013,121400010,121470011,121474011,121478009,124760009,124768010,124822006,121482009,122430002,121454014,121392016，50001871,122854005,121458010,121452006,121416008,50008779,50002777,121394007,121386009,50010825,50013810,121434010,50001865,50008565,50008246,50017192,121404045,121368009,121462014,50019372,50008248,121418011,50008249,50017193,50008252,50008251,50000512,121364047,122846004,50020776,50024799,50024801,50024921,50002794,50020778,50002792,50002791,50002793,50003942,50005500,50005497,50001692,50005495,50005496,50005503,50005498,50005499,50005501,50005502,50003455,50003457,122904003,50023091,50020770,50008863,50005507,121414011,50020768,50022701,50008862,121420012,50020766,50020764,121398012,121380011,50020751,50020676,50024945,50020720,50002790,50020730,50001866,50020678,121476008,121458013,50002795,121364011,50005505,121422014,50024943,50000583,50000582,50000584,213002,50005033,50000563,50008607,50006988,50008608,50024601,50024602,50012051",
	          "finalScore": "3.4206666666666665",
	          "_pos_": "14",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i3/TB1ZARnMXXXXXaGXVXX3bpXTXXX-170-100.png"
	        }, {
	          "id": "1608",
	          "sceneUrl": "https://pages.tmall.com/wow/act/15617/scene?acm=03653.1003.1.740603&aldid=VyrSqx06&wh_id=1608&scm=1003.1.03653.SUB_1608_740603&pos=15",
	          "_s_": "d",
	          "itemImg": "//img.alicdn.com/tps/i3/TB1xA3jLVXXXXXqapXXKofZZpXX-182-206.jpg",
	          "sceneCat": "50012010,50012027,50012032,50007003,50008881,50008883,1623,162116,50010850,123216004",
	          "finalScore": "0.0",
	          "_pos_": "15",
	          "entityType": "SUB",
	          "benefitImg": "//img.alicdn.com/tps/i2/TB1WvoALVXXXXcdXpXX3bpXTXXX-170-100.png"
	        }]
	        self._processData(content)
	      },
	      _processData: function (content) {
	        var self = this;
	        if (!content) return;
	        var items = content.slice(0, 3);
	        var smallItems = content.slice(3);

	        var sceneBgs = self.sceneBgs;
	        for (var j = 0; j < items.length; j++) {
	          var item = items[j];
	          item.index = j;
	          item.bg = sceneBgs[j];
	          item.itemImgCls = j % 2 === 0 ? 'item-img' : 'right-item-img';
	          item.benifitImgCls = j % 2 === 0 ? 'benifit-img' : 'right-benifit-img';
	        }


	        for (var i = 0; i < smallItems.length; i++) {
	          var smallItem = smallItems[i];
	          smallItem.index = i;
	          smallItem.top = (i - i % 2) / 2 * (230 + 4);
	          smallItem.left = i % 2 * (373 + 4);
	        }
	        self.items = items;
	        self.smallItems = smallItems;
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "shown": function () {return this.ds.floorTitle},
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "src": function () {return this.ds.floorTitle}
	      }
	    },
	    {
	      "type": "container",
	      "classList": [
	        "small-item-container"
	      ],
	      "style": {
	        "height": function () {return Math.round(this.smallItems.length/2)*234}
	      },
	      "children": [
	        {
	          "type": "container",
	          "repeat": function () {return this.smallItems},
	          "classList": [
	            "small-item"
	          ],
	          "style": {
	            "top": function () {return this.top},
	            "left": function () {return this.left}
	          },
	          "children": [
	            {
	              "type": "container",
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "small-item-bg"
	                  ],
	                  "attr": {
	                    "src": function () {return this.smallItemBg}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "container",
	              "classList": [
	                "small-item-img"
	              ],
	              "children": [
	                {
	                  "type": "banner",
	                  "attr": {
	                    "width": function () {return this.NUMBER_186},
	                    "height": function () {return this.NUMBER_206},
	                    "src": function () {return this.itemImg},
	                    "href": function () {return this.sceneUrl}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "container",
	              "classList": [
	                "small-benifit-img"
	              ],
	              "children": [
	                {
	                  "type": "banner",
	                  "attr": {
	                    "width": function () {return this.NUMBER_170},
	                    "height": function () {return this.NUMBER_100},
	                    "src": function () {return this.benefitImg},
	                    "href": function () {return this.sceneUrl}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "title": {
	    "width": 750,
	    "height": 100
	  },
	  "item": {
	    "width": 750,
	    "height": 340,
	    "marginBottom": 4
	  },
	  "item-img": {
	    "position": "absolute",
	    "left": 110,
	    "top": 20
	  },
	  "right-item-img": {
	    "position": "absolute",
	    "right": 110,
	    "top": 20
	  },
	  "benifit-img": {
	    "position": "absolute",
	    "right": 5,
	    "top": 160
	  },
	  "right-benifit-img": {
	    "position": "absolute",
	    "left": 40,
	    "top": 160
	  },
	  "small-item-container": {
	    "width": 750
	  },
	  "small-item": {
	    "position": "absolute",
	    "width": 373,
	    "height": 230,
	    "flexDirection": "row"
	  },
	  "small-item-bg": {
	    "width": 373,
	    "height": 230
	  },
	  "small-item-img": {
	    "position": "absolute",
	    "left": 12,
	    "top": 12
	  },
	  "small-benifit-img": {
	    "position": "absolute",
	    "right": 0,
	    "top": 65
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/41333d527ccae7db33e37491c3583a26", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 15:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/banner", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	        quality: 'normal',
	        width: 0,
	        height: 0,
	        src: '',
	        href: '',
	        spmc:0,
	        spmd:0
	    }},
	    methods: {
	      ready: function () {
	      },
	      _clickHandler: function () {
	        this.$call('modal', 'toast', {
	          message: 'click',
	          duration: 1
	        });
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "image",
	  "style": {
	    "width": function () {return this.width},
	    "height": function () {return this.height}
	  },
	  "attr": {
	    "src": function () {return this.src},
	    "imageQuality": function () {return this.quality}
	  },
	  "events": {
	    "click": "_clickHandler"
	  }
	})
	})

/***/ }

/******/ });