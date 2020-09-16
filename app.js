const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        require: true,
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getTemperatura = async(direccion) => {

    try {
        const sitio = await lugar.getLocationLatLong(direccion);
        const temperatura = await clima.getClima(sitio.lat, sitio.lng);
        //   console.log(temperatura);
        return `El clima en ${sitio.direccion} es de ${temperatura.temp} y la nubosidad es de ${temperatura.nubes}%`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


};


getTemperatura(argv.direccion).then(console.log);

/*
lugar.getLocationLatLong(argv.direccion).then(datos => {
    console.log(datos.lng);
    console.log(datos.lat);
    clima.getClima(datos.lat, datos.lng).then(dat => {
        //    console.log(dat);
    });
});*/