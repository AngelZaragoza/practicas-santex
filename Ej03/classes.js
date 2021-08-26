// 5) Agregar a la clase Cart una función que permite
// agregar un Product al mismo y que actualice el total.

// Tener en cuenta que:
// El amount de un product puede ser distinto de 1.
// Pueden agregar un producto que ya existe en el carrito,
// y en ese caso queremos que se incremente el amount.
// En el mundo real deberíamos usar el ID del producto,
// pero siendo un simple ejercicio, pueden utilizar el name para buscar.

class Cart {
  total;
  products;

  constructor(total) {
    this.total = total;
    this.products = [];
  }

  printCart() {
    console.log(`Carrito con ${this.products.length} prods:`, this);
  }

  // 5) Agregar a la clase Cart una función que permite
  // agregar un Product al mismo y que actualice el total.
  addProduct(product) {
    // Calcula el monto y lo suma al total del carro
    let subtotal = product.price * product.amount;
    this.total += subtotal;

    // Si el producto ya está cargado, incrementa el amount; sino, lo agrega al array
    let exists = this.products.findIndex((item) => item.name === product.name);
    if (exists >= 0) {
      this.products[exists].amount += product.amount;
    } else {
      this.products.push(product);
    }
  }

  // 6) Agregar una función llamada "removeProduct" a la clase Cart que reciba
  // un producto a remover y realice los ajustes necesarios en el carrito.
  removeProduct(product) {
    let exists = this.products.findIndex((item) => item.name == product.name);
    if (exists >= 0) {
      let subtotal = this.products[exists].price;

      if (this.products[exists].amount > 1) {
        this.products[exists].amount -= 1;
      } else {
        this.products.splice(exists, 1);
      }
      this.total -= subtotal;
      console.log("Borrado 1:", product.name);
    } else {
      console.log("No existe producto");
    }
  }

  // 7) Agregar una función llamada "cloneCart" a la clase Cart
  // que devuelva una copia del carrito con todos sus items.
  cloneCart() {
    return this;
  }

  // 10) Agregar una función a la clase Cart llamada "updateProductInfo" que permita 
  // modificar el/los productos según un criterio enviado por parametros
  updateProductInfo([...product], params) {
    console.log(product);
    console.log(params);
    
    // for (let index = 0; index < product.length; index++) {
    //   this.products.forEach((item) => {        
    //     if(item.name === product[index].name) {
          
    //     }
    //   })    
      
      
      
    }
    // this.products.filter(item => item.name )
    // let modifiedProducts = this.products.forEach((item) => {
        
    //   if(item.name === product.cont)
    // })    
    
    // let exists = this.products.findIndex((item) => item.name == product.name);
    // if(exists >= 0) {
      
    // }
  // }
}

class Product {
  name;
  price;
  amount;

  constructor(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}

module.exports = { Cart, Product };
