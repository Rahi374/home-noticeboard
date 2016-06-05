months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

var double_digit = function (num) {
    return ((num + "").length == 1) ? "0" + num : num;
}

var update_clock = function () {
    d = new Date();
    $(".hr")[0].innerHTML = double_digit(d.getHours());
    $(".min")[0].innerHTML = double_digit(d.getMinutes());
    $(".sec")[0].innerHTML = double_digit(d.getSeconds());

    $(".year")[0].innerHTML = d.getFullYear();
    $(".month")[0].innerHTML = months[d.getMonth()];
    $(".day")[0].innerHTML = d.getDate();
}

var update_weather = function() {
    if (check_weather) {
	var hourly_weather;
	var today_weather;
	$.ajax({url:"http://api.wunderground.com/api/43cf2b4ca80e52ad/hourly/q/JP/Yokohama.json"})
	    .done(function(data){
		hourly_weather = data;
		
		var lowest_rain_chance = 100;
		//var lowest_rain_chance_index = 0;
		var lowest_rain_chance_time = 0;
		var highest_rain_chance = 0;
		//var highest_rain_chance_index = 0;
		var highest_rain_chance_time = 0;

		var hitemp = 0;
		var hitemp_time = 0;
		var lotemp = 100;
		var lotemp_time = 0;

		var today = hourly_weather.hourly_forecast[0].FCTTIME.mday;

		for (i in hourly_weather.hourly_forecast) {
		    a = hourly_weather.hourly_forecast[i]

		    if (a.FCTTIME.mday == today) {
			if (a.pop > highest_rain_chance) {
			    //highest_rain_chance_index = i;
			    highest_rain_chance = a.pop;
			    highest_rain_chance_time = a.FCTTIME.civil + " " + a.FCTTIME.mon_abbrev + " " + a.FCTTIME.mday + " " + a.FCTTIME.weekday_name;
			}
			else if (a.pop < lowest_rain_chance) {
			    //lowest_rain_chance_index = i;
			    lowest_rain_chance = a.pop;
			    lowest_rain_chance_time = a.FCTTIME.civil  + " " + a.FCTTIME.mon_abbrev + " " + a.FCTTIME.mday + " " + a.FCTTIME.weekday_name;
			}

			if (a.temp.metric > hitemp) {
			    hitemp = a.temp.metric;
			    hitemp_time = a.FCTTIME.civil + " " + a.FCTTIME.mon_abbrev + " " + a.FCTTIME.mday + " " + a.FCTTIME.weekday_name;
			}
			else if (a.temp.metric < lotemp) {
			    lotemp = a.temp.metric;
			    lotemp_time = a.FCTTIME.civil  + " " + a.FCTTIME.mon_abbrev + " " + a.FCTTIME.mday + " " + a.FCTTIME.weekday_name;
			}
		    }
		}
		$(".hitemp")[0].innerHTML = "High (temp): " + hitemp + " at " + hitemp_time;
		$(".lotemp")[0].innerHTML = "Low (temp): "  + lotemp + " at " + lotemp_time;
		$(".maxrainchance")[0].innerHTML = "High (rain): <mark>" + highest_rain_chance + "% rain</mark> at " + highest_rain_chance_time;
		$(".minrainchance")[0].innerHTML = "Low (rain): <mark>"  + lowest_rain_chance  + "% rain</mark> at " + lowest_rain_chance_time;
	    });
	//.fail(function(data){alert("fail");});
	$.ajax({url:"http://api.wunderground.com/api/43cf2b4ca80e52ad/conditions/q/JP/Yokohama.json"})
	    .done(function(data){
		today_weather = data;
		$(".last_updated")[0].innerHTML = today_weather.current_observation.observation_time;
		$(".weather_string")[0].innerHTML = "><mark>" + today_weather.current_observation.weather + "</mark><";
		$(".temp")[0].innerHTML = "Temperature: <mark>" + today_weather.current_observation.temp_c + "℃</mark>   " + "(Feels like: " + today_weather.current_observation.feelslike_c + "℃)";
		//$(".feelslike")[0].innerHTML = "Feels like: " + today_weather.current_observation.feelslike_c + "℃";
		$(".humidity")[0].innerHTML = "Humidity: " + today_weather.current_observation.relative_humidity;
		//$(".weather_string").append("<img class='weather_icon' src='" + today_weather.current_observation.icon_url + "'></img>");
	    });//.fail(function(data){alert("fail");});

	
    }
}

$(document).ready(function(){
    $("#calendar").hide();
    //alert("Loading...")
    var check_weather = true;
    //update_weather();
    
    setInterval(update_clock, 1000); //update clock every second
    setInterval(update_weather, 3000000); //update weather every 10min
});

$(".weather").on("click", function(){
    $("#calendar").hide();
    $("#weather").show();
    check_weather = true;
    update_weather();
});

$(".calendar").on("click", function(){
    $("#weather").hide();
    $("#calendar").show();
    check_weather = false;
});
