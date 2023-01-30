let nombreAlumno = prompt ("Ingrese su nombre:");
console.log (nombreAlumno);

let apellidoAlumno = prompt ("Ingrese su apellido:");
console.log (apellidoAlumno);

console.log ("contraseña");

const contraseñaAutorizada = "soyunalumno";

for ( let i = 0; i < 2; i++) {
    let contraseñaAlumno = prompt ("Ingrese su contraseña:");

    if ( contraseñaAlumno === contraseñaAutorizada){
        console.log ("Contraseña correcta")
        alert ("Contraseña correcta, ¡bienvenido!")
        break;
    }else{
        contraseñaAlumno = prompt ("Contraseña incorrecta");
        alert ("Contraseña incorrecta, vuelva a intentar")
    }
}

let notaPrimerParcial = parseInt (prompt ( "Ingrese la nota del primer parcial: "));
console.log (notaPrimerParcial);

let notaSegundoParcial = parseInt (prompt ( "Ingrese la nota del segundo parcial: "));
console.log(notaSegundoParcial);

let promedio = function (notaPrimerParcial, notaSegundoParcial){
    return (notaPrimerParcial + notaSegundoParcial);
}
console.log ((notaPrimerParcial + notaSegundoParcial) /2);

if (promedio >= 6){
    alert ("Aprobado");
    console.log ("Aprobado")
  } else if ( promedio < 6 ){
    console.log ("No aprobado")
    alert ("No aprobado");
  } 


let nota = prompt ("Si su nota fue aprobada ingrese: Si y de lo contrario: No");

switch (nota){
    case "Si":
        console.log ("Aprobado");
        alert ("¡Felicitaciones!, gracias por acompañarme en el curso, hasta el año que viene.");
        break;
    case "No":
        console.log ("No aprobado");
        alert ("¡Debes estudiar más, nos vemos en el próximo periodo!");
        break;
}