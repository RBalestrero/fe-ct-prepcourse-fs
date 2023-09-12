/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arrayPadre = [];
   var propiedades = [];
   var i = 0;
   for(var prop in objeto)
   {
      arrayPadre[i] = [prop,objeto[prop]];
      i++;
   }
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   obj = {};
   array = [];
   var aux;
   var letra;
   var cont = 0;

   array = string.split('');

   //ORDENO LAS LETRAS EN FORMA ALFABÉTICA
   for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length - 1 - i; j++){
         if(array[j+1] < array[j]){
            aux = array[j];
            array[j] = array[j+1];
            array[j+1] = aux;
         }
      }
   }

   //CUENTO Y COMPARO CADA LETRA Y AL MISMO TIEMPO VOY CREANDO LAS PROPIEDADES DEL OBJETO
   letra = array[0];
   for(let i = 0; i < array.length; i++){
      if(letra == array[i]){
         cont++;
         if(i == array.length - 1){
            obj[letra] = cont;
         }
      }
      else{
         obj[letra] = cont;
         cont = 0;
         letra = array[i];
         i--;
      }
   }
   return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var array = [];
   var mayus = [];
   var minus = [];
   array = string.split('');
   for(let i = 0; i < array.length; i++){
      if(array[i] == array[i].toUpperCase() ){
         mayus.push(array[i]);
      }
      else{
         minus.push(array[i]);
      }
   }
   string = mayus.join('') + minus.join('');
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   //var frase = "Hola soy Renzo Balestrero";
   var palabraInvertida = [];
   var arrayString = [];
   var tamañoPalabra;
   var tamañoFrase;
   var fraseInvertida = [];
   var palabraString;
   var palabraArray = [];

   arrayString = frase.split(' ');
   tamañoFrase = arrayString.length;
   for(let j = 0; j < tamañoFrase; j++){

      palabraString = arrayString.shift();
      palabraArray = palabraString.split('');
      tamañoPalabra = palabraArray.length;
      for(let i = 0; i < tamañoPalabra; i++){
         palabraInvertida.push(palabraArray.pop());
      }
      
      fraseInvertida.push(palabraInvertida.join(''));
      palabraInvertida = [];
   }
   fraseInvertida = fraseInvertida.join(' ');
   
   return fraseInvertida;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = [numero];
   var numArray = [];
   var numArray2 = [];
   var numInvertido = [];
   var tamNum = 0;
   numArray = (num.join('')).split('');
   numArray2 = numArray;
   console.log(numArray2);
   tamNum = numArray.length;
   for(let i = 0; i < tamNum; i++){
      numInvertido.push(numArray.pop());
   }

   if(numInvertido.join('') == numero)
      return 'Es capicua';
   else
      return 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var array = [];
   array = string.split('');
   array = array.filter(num => num != 'a' && num != 'b' && num != 'c');
   return array.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var aux;
   for(let i = 0; i < arrayOfStrings.length; i++){
      for(let j = 0; j < arrayOfStrings.length -1 -i; j++){
         if(arrayOfStrings[j+1].length < arrayOfStrings[j].length ){
            aux = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[j+1];
            arrayOfStrings[j+1] = aux;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];
   var flag = false;
   if(array1.length >= array2.length){
      for(let i = 0; i < array2.length ; i++){
         for(let j = 0; j < array1.length; j++){
            if(array2[i] == array1[j]){
               resultado.push(array1[j]);
               flag = true;
               break;
            }
         }
      }
   }
   else{
      for(let i = 0; i < array1.length ; i++){
         for(let j = 0; j < array2.length ; j++){
            if(array1[i] == array2[j]){
               resultado.push(array2[j]);
               flag = true;
               break;
            }
         }
      }
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
