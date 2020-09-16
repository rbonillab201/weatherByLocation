const axios = require('axios');


const getClima = async(lat, lng) => {
    const clima = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=1&units=metric&appid=4917aeb5ce47ca0921fde14eb1456e04`
    });
    const respuesta = await clima.get();
    if (respuesta.name === 0) {
        throw new Error('Ha existido un error', error);
    }

    return {
        temp: respuesta.data.list[0].main.temp,
        nubes: respuesta.data.list[0].clouds.all
    };

};

module.exports = {
    getClima
}