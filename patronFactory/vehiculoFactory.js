//importación de las clases automovil y camioneta
const automovil = require('./automovil');
const camioneta = require('./camioneta');

//clase vehiculoFactory y método para mostrar los vehiculos.
class vehiculoFactory{
    mostrarAuto(tipoAuto){
        switch (tipoAuto){
            //dependiendo el tipo de vehiculo se creará un automovil o una camioneta.
            case 'automovil':
                return new automovil('negro', 2019, 'Mazda');
            case 'camioneta':
                return new camioneta('Azul', 2020, 'Lexuz');
                default: 
                    {
                        console.log('El tipo de vehiculo no existe');
                    }
        }
    }
}

//exportacion de la clase vehiculoFactory
module.exports = new vehiculoFactory;