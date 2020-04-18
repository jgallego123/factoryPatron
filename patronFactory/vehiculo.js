//clase vehiculo y su constructor
class vehiculo{
    constructor(color='', modelo, marca='', nroPuertas, cilindraje='', nroPasajeros,kilometraje, velMax){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.caracteristicas={
            'Marca:  ': marca,
            'Color:  ': color,
            'Modelo:  ': modelo,
            'Número de puertas:  ': nroPuertas,
            'Cilindraje (cc):  ': cilindraje,
            'Número de pasajeros:  ': nroPasajeros,
            'Kilometraje (Km/h):  ': kilometraje,
            'Velocidad máxima:  ': velMax,
            'Tiempo en recorrer 50m (seg):  ': (0,5)/(velMax),
        };
    }
    //método que muestra las características de los vehiculos.
    caracteristicasVehiculo(){
        console.log(this.caracteristicas);
    }
}
//exportación de la clase vehiculo.
module.exports = vehiculo;