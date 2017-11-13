import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=d5d76d39df82a7a6da00f5e14cabe257&units=metric';
 
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        var error = "City not found";

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.cod);
            }else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(error);
        });
    }
}