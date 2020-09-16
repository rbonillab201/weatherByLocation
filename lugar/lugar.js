const axios = require('axios');

const getLocationLatLong = async(address) => {

    const encoderURL = encodeURI(address);
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encoderURL}&appid=4917aeb5ce47ca0921fde14eb1456e04`
    });

    const respuesta = await instance.get();

    //  console.log(respuesta.data.coord);
    if (respuesta.data.coord.lat === 0) {
        throw new Error('Hubo un error');
    }

    const direccion = respuesta.data.name;
    const lat = respuesta.data.coord.lat;
    const lng = respuesta.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    };
    //  return respuesta.data.coord.lat;
};

module.exports = {
    getLocationLatLong
}