/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre,apellido,edad,domicilio){
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.domicilio=domicilio;

   }
   detalle(){return ({nombre:this.nombre, apellido:this.apellido, edad:this.edad, domicilio:this.domicilio});}

}

var persona1= new Persona("pepito","perez","18","venecia")
persona1.detalle()

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   var instancia_persona= new Persona(nombre, apellido, edad, domicilio);
   return instancia_persona

}



function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:

   Persona.prototype.datos = function(){
      return  this.nombre +", "+this.edad+ " años";
   }


}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
