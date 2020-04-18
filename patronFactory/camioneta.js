//importación de la clase vehiculo
const vehiculo= require('./vehiculo');

//clase camioneta y su constructor
class camioneta{
    constructor(color, modelo, marca){
        return new vehiculo(color, modelo, marca, 4, '4000cc', 7, 70890, 160);
    }
}

//exportación de la clase camioneta.
module.exports = camioneta;