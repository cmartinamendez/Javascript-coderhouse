/* class Reserva {
    constructor(nombre, telefono, correo, cabana, personas, estadia){
        this.nombre = nombre
        this.telefono = telefono
        this.correo = correo
        this.cabana = cabana
        this.personas = personas
        this.estadia = estadia
    }
}

arrayReservas = []

 function ingresoReserva() {
    let nombre = prompt("Para comenzar con la reserva ingrese su nombre y apellido por favor.")
    let telefono = prompt("Ingrese un número de telefono.")
    let correo = prompt("Ingrese su correo electrónico, al cual se enviará la factura.")
    let cabana = parseInt(prompt("Escriba el número de la cabaña a alojarse: 1 - Merak (5 personas) / 2 - Megrez (6 personas)  / 3 - Phecda (6 personas)  / 4 - Dubhe (7 personas)  / 5 - Mizar (8 personas)  / 6 - Alioth (8 personas)"))
    let personas = parseInt(prompt("Ingrese, del 1 al 8, la cantidad de personas a alojarse. Recuerde que nuestra capacidad máxima es de 8 personas."))
    let estadia = parseInt(prompt("Ingrese la cantidad de noches a alojarse.")) // Más adelante este dato será resultado de (fechaEgreso - fechaIngreso)

    const reserva = new Reserva(nombre, telefono, correo, cabana, personas, estadia)
    console.log(cabana)
    arrayReservas.push(reserva)
    return reserva
}

console.log(arrayReservas)
ingresoReserva()


arrayCabanas = []

class Cabana {
    constructor(nombre, capacidad, tarifa){
        this.nombre = nombre
        this.capacidad = capacidad
        this.tarifa = tarifa
    }
} 
const merak = new Cabana("merak", 5, 60000)
const megrez = new Cabana("megrez", 6, 75000)
const phecda = new Cabana("phecda", 6, 75000)
const dubhe = new Cabana("dubhe", 7, 85000)
const mizar = new Cabana("mizar", 8, 95000)
const alioth = new Cabana("alioth", 8, 95000)

arrayCabanas.push(merak, megrez, phecda, dubhe, mizar, alioth)
console.log(arrayCabanas)
function tarifaTotal(){
    const tarifa = arrayCabanas[arrayReservas[arrayReservas.length-1].cabana-1].tarifa*arrayReservas[arrayReservas.length - 1].estadia
    console.log(tarifa)
    alert(`Su Reserva ha sido registrada con éxito, su tarifa total por los ${arrayReservas[0].estadia} días de estadia es de $${tarifa} pesos chilenos.`)
    
} 

tarifaTotal()
*/

// ----- Mixer Cabañas -----

let mixerCabanas = mixitup('.cabana__container', { 
    selectors: {
        target: '.cabana__card'
    },
    animation: {
        duration: 300
    }
    });

    /* Link Active Cabaña */
    const linkCabana = document.querySelectorAll('.cabana__item')

    function activeCabana() {
        linkCabana.forEach(l=> l.classList.remove('active-cabana'))
        this.classList.add('active-cabana')
    }
    linkCabana.forEach(l=> l.addEventListener("click", activeCabana))

    // ----- Pop-up Cabañas -----
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("cabana__button")) {
            toggleCabanaPopup();
            cabanaItemDetails(e.target.parentElement);
        } 
    })
    
    function toggleCabanaPopup() {
        document.querySelector(".cabana__popup").classList.toggle("open");
    }

    document.querySelector(".cabana__popup-close").addEventListener("click", toggleCabanaPopup)

    function cabanaItemDetails(cabanaItem) {
        document.querySelector(".cp__mini img").src = cabanaItem.querySelector(".cabana__img").src;
        document.querySelector(".cabana__popup-subtitle span").innerHTML = cabanaItem.querySelector(".cabana__title").innerHTML;
        document.querySelector(".cabana__popup-body").innerHTML = cabanaItem.querySelector(".cabana__item-details").innerHTML;
    
    }
