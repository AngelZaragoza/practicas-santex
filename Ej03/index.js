// ** Ejercicios Javascript Santex || 03 **
// ----------------------------------------

// 1) Dado el objeto "cart" y la función "hasProducts",
// simplificar la condición "cartHasProducts" a una sola línea.

const cart = {
  total: 1500,
  products: [
    {
      name: "iPhone 12",
      price: 1000,
      amount: 1,
    },
    {
      name: "air pods",
      price: 500,
      amount: 1,
    },
  ],
};

function hasProducts(cart) {
  //   const cartHasProducts =
  //     cart !== null &&
  //     cart !== undefined &&
  //     cart &&
  //     cart.products !== null &&
  //     cart.products !== undefined &&
  //     cart.products.length > 0;

  // Condición reducida a una línea
  const cartHasProducts = cart && cart.products && cart.products.length;

  if (cartHasProducts) {
    return `The cart has ${cart.products.length} items`;
  } else {
    return "The cart is empty";
  }
}

console.log(hasProducts(cart));

// 2) Crear una clase Cart y una clase Product
// siguiendo la estructura del objeto en el ejercicio 1
const { Cart } = require("./classes");
const { Product } = require("./classes");

// 3) Crear una función "createCart" que genere un objeto
// de la clase Cart vacío con precio default en 0.

const createCart = () => new Cart(0);

// 4) Crear una función "createProduct" que genere un objeto de la
// clase Producto recibiendo name, price y amount en su constructor.

const createProduct = (name, price, amount) => new Product(name, price, amount);

// 8) Crear una función app() que haga lo siguiente
//     Crear un carrito
//     Crear un producto (datos a eleccion de ustedes)
//     Agregar ese producto al carrito
//     Agregar ese producto al carrito (si, otra vez. Verificar que le haya aumentado el amount)
//     Clonar el carrito a una variable cartCopy o algo asi
//     Crear un nuevo producto (datos a eleccion de ustedes)
//     Agregar el nuevo producto a la copia del carrito
//     Verificar que el nuevo producto fue agregado tanto en el carrito original como en la copia.

const app = () => {
  const cartPers = createCart();

  let prod1 = createProduct("Moto G9", 205, 1);
  let prod2 = createProduct("Samsung S21", 650, 1);
  let prod3 = createProduct("Moto G9", 205, 3);

  cartPers.addProduct(prod1);
  cartPers.addProduct(prod2);
  cartPers.addProduct(prod3);
  console.log('Carrito Original: sólo agregado productos');
  cartPers.printCart();

  const copiaCart = cartPers.cloneCart();
  let prod4 = createProduct("Xiaomi Redmi Note 10", 235, 2);
  let prod5 = createProduct('LED Philips 42"', 400, 1);
  copiaCart.addProduct(prod4);
  cartPers.removeProduct(prod3);
  copiaCart.removeProduct(prod5);
  
  console.log(`Carrito Copia: Agregado ${prod4.name}`);  
  copiaCart.printCart();

  console.log(`Carrito Original: Removido ${prod3.name}`);  
  cartPers.printCart();

  cartPers.updateProductInfo([prod1, prod4],{price:305});
};

app();

