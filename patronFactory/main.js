const vehiculoFactory = require('./vehiculoFactory');


const automovilFactory = vehiculoFactory.mostrarAuto('automovil');
const camionetaFactory = vehiculoFactory.mostrarAuto('camioneta');

automovilFactory.caracteristicasVehiculo();
camionetaFactory.caracteristicasVehiculo();
