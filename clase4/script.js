function datosPers(numPersonas) {
    if (numPersonas < 7) {
            for(let i = 0 ; i < numPersonas ; i++) {
                prompt(`Ingrese nombre y apellido huésped n° ${i+1}`);
                prompt(`Ingrese DNI huésped n° ${i+1}`);
            } 
            alert("Gracias. Su reserva ha sido confirmada.");
            }
    else {
        alert("No contamos con cabaña para esa cantidad de personas");
    }            
}
let numPersonas = parseInt(prompt("Ingrese cantidad de huéspedes a alojar:"));
datosPers(numPersonas);

