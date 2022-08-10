const personasId = []

function datosPers(numPersonas) {
    if (numPersonas < 7) {
            for(let i = 0 ; i < numPersonas ; i++) {
                let nombre = prompt(`Ingrese nombre y apellido huésped n° ${i+1}`);
                let id = prompt(`Ingrese DNI huésped n° ${i+1}`);
                personasId.push(id)
                } 
        alert(`Su cabaña ha sido reservada con éxito para ${personasId.length} personas. Los esperamos!`)  
        } else {
        alert("No contamos con cabaña para esa cantidad de personas");
    }
    console.log(personasId)
     
}

let numPersonas = parseInt(prompt("Ingrese cantidad de huéspedes a alojar:"));
datosPers(numPersonas);

