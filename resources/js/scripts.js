$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    if (city == "") {
        alert("An empty field is not allowed, please try again");
        return;
    }
    $.ajax({
        
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`,
      type: 'GET',
      data: {
        format: 'json'
      },
        
      success: function(response) {
        $('.main-icon').empty()
        $('.temp').text(`${response.main.temp} °C.`);
        $('.humidity').text(`${response.main.humidity}%`);
        switch (response.weather[0].main) {
            case "Clouds":
                //alert("Clouds!");
                $('.main-icon').append(`<ion-icon name="cloudy"></ion-icon>`);
                break;
            case "Drizzle":
               // alert("Rain!");
                 $('.main-icon').append(`<ion-icon name="rainy"></ion-icon>`);
                break;
            case "Clear":
                //alert("Sunny!");
                 $('.main-icon').append(`<ion-icon name="sunny"></ion-icon>`);
                break;
            default:
                break;
        }
        console.log(response.weather[0].main)
      },
        
      error: function() {
        alert("Error occurred, please check console");
      }
        
    });
  });
});