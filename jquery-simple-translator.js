// detect browser language setting
var browser_language = navigator.language.substr(0,2);

var populate_textfields = function(jsdata, language) {
	$("[text_id]").each (function (index) {
		var string =  jsdata[$(this).attr ('text_id') + "_" + language];
		if(string == undefined) {
			// fallback to english
			string =  jsdata[$(this).attr ('text_id') + "_en"];
		}
		// smooth language change
		$(this).hide().html(string).fadeIn(1500);
	});
	console.log("language set to " + language);
}

// loads json text file
$.getJSON("text.json")
	.done(function(data){
		populate_textfields(data, browser_language);
		return JSONtext = data;
		}) 
	.fail(function(jqxhr, textStatus, error){
		// for debugging
		console.log("error");
		console.log(error + jqxhr + textStatus)
		});