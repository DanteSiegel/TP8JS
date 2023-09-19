function obtenerEdad(fechaNacimiento) {
    const Fcumple = new Date(fechaNacimiento);
    const Factual = new Date();
    const edad = Factual.getFullYear() - Fcumple.getFullYear();

    if (Factual.getFullYear() < edad || (Factual.getMonth() === Fcumple.getMonth() && Factual.getDate() < Fcumple.getDate())) {
       
        edad--;
    }
    return edad;
}

const Frutas = ['Manzana','Banana','Naranja','Frutilla','Uva','Piña','Mango','Sandia','Kiwi','Melocoton']






const nombre = prompt("Diga su nombre");
const apellido = prompt("Diga su apellido");
const fechaNacimiento = prompt("Fecha de nacimiento");
const edad = obtenerEdad(fechaNacimiento);
console.log("Hola " + nombre + " " + "tenes " + edad + " años.");
const frut = prompt("Que fruta buscas")
const busqueda = Frutas.find(fruta => fruta == frut)
if(busqueda == frut){
    console.log("Tenemos " + frut);
}
else{
    console.log("No tenemos " + frut);
} 








