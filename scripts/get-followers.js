var f_page = "smashmag"; // the page name for your fan page, e.g. the 'smashmag' part of http://facebook.com/smashmag
var t_page = "smashingmag"; // the account name for your main twitter account

function add_commas(number) {
	if (number.length > 3) {
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');
		for (i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0)) {
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			} else {
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);	
			}
		}
		return (output);
	} else {
		return number;
	}
}

// when document is ready load the counts
$(document).ready(function(){

	// grab from facebook
	$.getJSON('https://graph.facebook.com/'+f_page+'?callback=?', function(data) {
		var fb_count = data['likes'].toString();
		fb_count = add_commas(fb_count);
		$('#fb_count').html(fb_count);
	});

	// grab from twitter
	$.getJSON('http://api.twitter.com/1/users/show.json?screen_name='+t_page+'&callback=?', function(data) {
		twit_count = data['followers_count'].toString();
		twit_count = add_commas(twit_count);
		$('#twitter_count').html(twit_count);
	});

});