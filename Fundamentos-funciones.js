// Fundamentos y funciones

// Variables
let tipo_producto = "Teléfono"
let nombre_producto = "Galaxy S25"
let marca = "SAMSUNG"
let año_fabrica = 2025
let gb_disponibles = 256
let precio = 779.99

// Objetos
let detalle_producto = {
    tipo_producto : "Teléfono",
    nombre_producto : "Galaxy S25",
    marca : "SAMSUNG",
    año_fabrica : 2025,
    gb_disponibles : 256,
    precio : 779.99
}

//Strings
console.log(nombre_producto.length) 
console.log(nombre_producto.toUpperCase()) 
console.log(nombre_producto.toLowerCase()) 
console.log(nombre_producto.charAt(0)) 
console.log(nombre_producto.includes("Galaxy")) 

//Template String
console.log(`Producto: ${tipo_producto} - Modelo: ${nombre_producto}`)

//Números
console.log(gb_disponibles + 128) //aumento de almacenamiento
console.log(precio-(precio*0.1)) //descuento


//Condicional simple
if (precio > 500) {
    console.log("El producto es de gama alta")
} else {
    console.log("El producto es de gama media o baja")
}

//Operador ternario
const categoria_precio = precio > 500 ? "Alta gama" : "Media o baja"
console.log(`Categoría del producto: ${categoria_precio}`)



