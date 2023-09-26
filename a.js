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

const ciudad = {
nombre: "ciudad Amor",
fechaFundacion: 09/9/1999,
poblacion:2999999,
extension: 400 + "KM"

};

const dobleElementos = [1,2,3,4]



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

 console.log(10 == '10') // true 
 console.log(10 ==='10')// false x q el tipo de dato es distinto y el === compara el tipo de dato tambien
 console.log(10.6)//es un const o un float
 console.log(true == 1)//true es considerado == 1 


for (const property in ciudad) {
    console.log(`${property} : ${ciudad[property]}`);
  }


  for (const elemento of dobleElementos) {
    console.log(elemento);
    console.log(elemento);
  }
  
