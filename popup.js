$(document).ready(function () {
  page.init();
});

var page = {

  init: function () {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function () {
    page.getReddits();
  },

  initEvents: function () {
  },

  getReddits: function(){
  $.ajax({
    url: 'http://api.wunderground.com/api/424d5cc3ad79524b/conditions/q/SC/Charleston.json',
    method: 'GET',
    success: function(data) {
        $('.weather').append (
        "<h1>Location: " + data.current_observation.display_location.full +"</h1>" +
        "<img src='" + data.current_observation.icon_url + "'/><br>" +
        "<h2>Currently: " + data.current_observation.weather + " <br>" +
        data.current_observation.temp_f + "&deg; F with " +
        data.current_observation.relative_humidity + " humidty<br>" +
        "Feels like: " + data.current_observation.feelslike_f + "&deg;</h2><br>");
        $('footer').append("<a href='http://www.wunderground.com/US/SC/Charleston.html'>Full Weather Report</a> <br><br>" +
        "<h3>Brought to you by <a href='http://www.wunderground.com'> Weather Underground <img src='" + data.current_observation.image.url +"' class='logo' /></a></h3>");

          $(document).ready(function(){
           $('footer').on('click', 'a', function(){
             chrome.tabs.create({
                 url: $(this).attr('href')
               });
           });
        });
      }
   })
 }
};
