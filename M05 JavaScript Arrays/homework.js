/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:

   return array.shift()
}

console.log(devolverPrimerElemento(["casa","apartamento"]))
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   return array.pop()
}
console.log(devolverUltimoElemento(["casa","apartamento","finca"]))



function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
console.log(obtenerLargoDelArray(["casa","apartamento","finca"]))


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map((num) => {
      return num+1;
  })
  return masUno
}

console.log(incrementarPorUno([1,2,3,4]))



function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array[array.length] = elemento; 
   return array; 

   
}
console.log("Agregar item al final del array")
console.log(agregarItemAlFinalDelArray(["naranjas","peras","bananas"],"cocos"))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

console.log(agregarItemAlComienzoDelArray(["naranjas","peras","bananas"],"lechuga"))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   return palabras.join(" ")
}

console.log(dePalabrasAFrase(["Hola","como","estás"]))

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)){
      return true
   }
   else {return false}
}

console.log(arrayContiene(["Hola","como","estas"],"estas"))


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var inicio=0
   for (var i=0; i<arrayOfNums.length; i++){
      inicio=inicio+arrayOfNums[i]
   }
   return inicio

}
console.log("agregarNumeros")
console.log(agregarNumeros([1,2,3,4,5]))

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var inicio=0
   for (var i=0; i<resultadosTest.length; i++){
      inicio=inicio+resultadosTest[i]
   }
   return inicio/resultadosTest.length


}

console.log(promedioResultadosTest([1,2,3,6]))


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   return Math.max(...arrayOfNums)
}
console.log(numeroMasGrande([1,3,4]))


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var total = 1;
   if(arguments.length === 0)
    return 0;
    else if (arguments.length === 1) 
    return arguments[0];
   else {for (var i = 0; i < arguments.length; i++)
      {total = total * arguments[i];}
   return total;
}
}
console.log("multiplicar argumentos")
console.log(multiplicarArgumentos(0))
console.log(multiplicarArgumentos(3,2,0))



function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18){contador=contador+1}}
      return contador;
      
}

console.log("cuento Elementos")
console.log(cuentoElementos(["100","222","3","2","120"]))





function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var dia_laboral=[2,3,4,5,6]
   var fin_de_semana=[1,7]
   if (dia_laboral.includes(numeroDeDia)){return "Es dia laboral"}
   else if ( fin_de_semana.includes(numeroDeDia)){return "Es fin de semana"}


}

console.log(diaDeLaSemana(1))
console.log(diaDeLaSemana(2))
console.log(diaDeLaSemana(3))
console.log(diaDeLaSemana(4))
console.log(diaDeLaSemana(5))
console.log(diaDeLaSemana(6))
console.log(diaDeLaSemana(7))




function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if (num.toString()[0]==9){return true;}
   else {return false}

   
}

console.log(empiezaConNueve(8989))
console.log(empiezaConNueve(989))


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   var cumplen_condicion = array.every((elem) => {return elem === array[0]})
      //  si cada número en el arreglo números cumple con la condición entre corchetes retorna "true" de lo contrario retorna "false"
   return cumplen_condicion

}


   console.log("todos iguales")
   console.log(todosIguales(["1","1","1"]))
   

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArray = [];
   for (var i = 0; i < array.length; i++) {if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      nuevoArray.push(array[i])}}
      if (nuevoArray.length < 3){
         return 'No se encontraron los meses pedidos';} 
      else {return nuevoArray;}

}
   
console.log("meses del año")
var meses= ["Enero","Marzo"]
console.log(meses[1])
console.log(mesesDelAño(["Enero","Marzo","Noviembre"]))


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var seis=6;
   var tabla=[];
   for (var i=0; i < 11;i++){tabla.push(seis*i)}
   return tabla
}

console.log(tablaDelSeis())

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   nuevo_arreglo=[]

   for (var i=0; i< array.length; i++){
      if(array[i]>100){
         nuevo_arreglo.push(array[i])}}
         return nuevo_arreglo
}

console.log(mayorACien([133,134,95,101,100]))
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
   var suma = num;
   for (var i = 0; i < 10; i++) {
      suma = suma + 2;
      if (suma === i) break;
      else {array.push(suma);}}
      if(i < 10) {
         return 'Se interrumpió la ejecución';} 
         else {return array;}


}
console.log("break statement")
console.log(breakStatement())


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];var suma = num;
   for (i = 0; i < 10; i++) {
      if (i === 5){continue;}
       else {suma = suma + 2;
         array.push(suma);}}
         return array; 
      }





/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
