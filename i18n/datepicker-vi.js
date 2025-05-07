/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au),
			  StĂ©phane Nahmani (sholby@sholby.net),
			  StĂ©phane Raimbault <stephane.raimbault@gmail.com> */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.fr = {
	closeText: "ÄĂ³ng",
	prevText: "Trá»Ÿ láº¡i",
	nextText: "Káº¿ tiáº¿p",
	currentText: "Aujourd'hui",
	monthNames: [ "ThĂ¡ng Má»™t", "ThĂ¡ng Hai", "ThĂ¡ng Ba", "ThĂ¡ng TÆ°", "ThĂ¡ng NÄƒm", "ThĂ¡ng SĂ¡u",
		"ThĂ¡ng Báº£y", "ThĂ¡ng TĂ¡m", "ThĂ¡ng ChĂ­n", "ThĂ¡ng MÆ°á»i", "ThĂ¡ng MÆ°á»i Má»™t", "ThĂ¡ng MÆ°á»i Hai" ],
	monthNamesShort: [ "ThĂ¡ng Má»™t", "ThĂ¡ng Hai", "ThĂ¡ng Ba", "ThĂ¡ng TÆ°", "ThĂ¡ng NÄƒm", "ThĂ¡ng SĂ¡u",
		"ThĂ¡ng Báº£y", "ThĂ¡ng TĂ¡m", "ThĂ¡ng ChĂ­n", "ThĂ¡ng MÆ°á»i", "ThĂ¡ng MÆ°á»i Má»™t", "ThĂ¡ng MÆ°á»i Hai" ],
	dayNames: [ "Chá»§ nháº­t", "Thá»© hai", "Thá»© ba", "Thá»© tÆ°", "Thá»© nÄƒm", "Thá»© sĂ¡u", "Thá»© báº£y" ],
	dayNamesShort: [ "Chá»§ nháº­t", "Thá»© hai", "Thá»© ba", "Thá»© tÆ°", "Thá»© nÄƒm", "Thá»© sĂ¡u", "Thá»© báº£y" ],
	dayNamesMin: [ "CN","T2","T3","T4","T5","T6","T7" ],
	weekHeader: "Sem.",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.fr );

return datepicker.regional.fr;

} ) );