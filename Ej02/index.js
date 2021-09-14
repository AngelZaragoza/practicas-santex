// // ** Ejercicios Javascript Santex **
// // ----------------------------------

// // 1)
// let s1 = 3;
// let s2 = 4;
// sumaDosNumeros = () => console.log(`Suma de ${s1} y ${s2} = ${s1 + s2}`);
// console.log("Punto 1)");
// sumaDosNumeros();

// // 2)
// sumaDosNumerosXParametro = (a, b) => console.log(`Suma de ${a} y ${b} = ${a + b}`);
// console.log("\nPunto 2)");
// sumaDosNumerosXParametro(2, 3);
// sumaDosNumerosXParametro(1, 1);
// sumaDosNumerosXParametro(35, -30);
// sumaDosNumerosXParametro(475.5, 528.53);

// // 3)
// console.log("\nPunto 3)");
// sumaDosNumerosXParametro("2", "-4"); //Devuelve un string concatenando los dos parámetros: '2-4'
// sumaDosNumerosXParametro("20", 57); //Devuelve un string concatenando los dos parámetros: '2057'
// sumaDosNumerosXParametro(true, false); //Devuelve el valor 1 (true?)
// sumaDosNumerosXParametro(false, false); //Devuelve el valor 0 (false?)
// sumaDosNumerosXParametro(27, false); //Devuelve el valor 27 (toma el false como 0)
// sumaDosNumerosXParametro(27, true); //Devuelve el valor 28 (toma el true como 1)
// sumaDosNumerosXParametro(27, [3, 5, 8]); //Devuelve el valor 273,5,8 (string concatenado?)

// // 4)
// sumaNrosXParamCheck = (a, b) => {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else {
//     return -1;
//   }
// };
// console.log("\nPunto 4)");
// let p4a = 23;
// let p4b = 54.32;
// let p4c = "54.32";
// console.log(`Suma de dos números: ${p4a}+${p4b} =`, sumaNrosXParamCheck(p4a, p4b));
// console.log(
//   `Suma de un número y un string: ${p4a}+'${p4c}' =`,
//   sumaNrosXParamCheck(p4a, p4c)
// );

// // 5)
// sumaHastaParametro = (nro) => {
//   let suma = 0;
//   for (let i = 1; i <= nro; i++) {
//     suma += i;
//   }
//   return suma;
// };
// console.log("\nPunto 5)");
// let p5a = 4,
//   p5b = 6,
//   p5c = 10;
// console.log(`Suma hasta ${p5a}`, sumaHastaParametro(p5a));
// console.log(`Suma hasta ${p5b}`, sumaHastaParametro(p5b));
// console.log(`Suma hasta ${p5c}`, sumaHastaParametro(p5c));

// // 6)
// menorValorEnArray = (array) => {
//   let menor = undefined;
//   console.log(array);

//   // Se recorre todo el array chequeando cada elemento.
//   // Si el 'elemento' es tipo 'number' y
//   // 'menor' es undefined o mayor al 'elemento',
//   // se sobreescribe la variable 'menor'
//   array.forEach((element) => {
//     if (typeof element === "number") {
//       if (menor == undefined || element < menor) {
//         menor = element;
//       }
//     }
//   });

//   // Se retorna 'menor'
//   return menor;
// };
// console.log("\nPunto 6)");
// let p6a = [6, 3, 8, 2];
// let p6b = ["6", 3, "8", "2"];
// let p6c = [true, 9, false, "2", undefined];
// let p6d = [null, "2", true];
// console.log("Menor =", menorValorEnArray(p6a));
// console.log("Menor =", menorValorEnArray(p6b));
// console.log("Menor =", menorValorEnArray(p6c));
// console.log("Menor =", menorValorEnArray(p6d));

// // 7)
// esMayor = (obj) => {
//   if (Object.keys(obj).includes("edad")) {
//     return obj.edad >= 18;
//   } else {
//     return false;
//   }
// };

// console.log("\nPunto 7)");
// console.log("Es mayor?:", esMayor({ nombre: "Gaston", edad: 33 }));
// console.log("Es mayor?:", esMayor({ nombre: "Federico", edad: 11 }));
// console.log("Es mayor?:", esMayor({ nombre: "Marcos" }));
// console.log("Es mayor?:", esMayor({ nombre: "Gabriel", edad: "39" }));

// // 8)
// dobleValor = (arr) => {
//   if (Array.isArray(arr)) {
//     return arr.map((item) => item * 2);
//   } else {
//     return "No es un array";
//   }
// };
// console.log("\nPunto 8)");
// console.log("Array con valores dobles:", dobleValor([1, 2, 15]));
// console.log("Array con valores dobles:", dobleValor([-3, 8]));
// console.log("Array con valores dobles:", dobleValor({ k: -3, v: 8 }));
// // La siguiente línea intenta y consigue convertir el tipo 'string' en 'number'
// console.log("Array con valores dobles:", dobleValor([-24.54, "81", 56.32]));
// // La siguiente línea intenta y falla al convertir el 'string'. Devuelve NaN
// console.log("Array con valores dobles:", dobleValor([-24.54, "81x", 56.32]));

// // 9)
arrayAClaveValor = (obj) => {
  if (typeof obj === "object") {
    return Object.entries(obj);
  } else {
    return "No es un objeto";
  }
};
console.log("\nPunto 9)");
console.log('\nFunción con Object entries');
console.log(arrayAClaveValor({ nombre: "Gaston", edad: 33 }));
console.log(arrayAClaveValor({ pais: "Argentina" }));
console.log(arrayAClaveValor(25, "Argentina"));
console.log(arrayAClaveValor(["Argentina", 39]));

// arrayAClaveValorConFor = (obj) => {
//   let resp = [];
//   if (typeof obj === "object") {
//     for (const key in obj) {
//       let item = [];
//       item.push(key);
//       item.push(obj[key]);
//       resp.push(item);
//     }
//   } else {
//     console.log('No Es Objeto');    
//   }
//   return resp;
// };
// console.log('\nFunción con For común');
// console.log(arrayAClaveValorConFor({ nombre: "Gaston", edad: 33, direccion: "Córdoba" }));
// console.log(arrayAClaveValorConFor({ pais: "Argentina", habitantes: 48000000 }));
// console.log(arrayAClaveValorConFor(25, "Argentina"));
// console.log(arrayAClaveValorConFor(["Argentina", 39]));