//importación de la clase vehiculo
const vehiculo= require('./vehiculo');

//clase automovil y su constructor
class automovil{
    constructor(color, modelo, marca){
        return new vehiculo(color, modelo, marca, 2, '1600cc', 5, 130670, 120);
    }
}

//exportación de la clase automovil.
module.exports = automovil;