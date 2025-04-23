//Variables 
//contenedor(caja) de información
// ES6
// let - const
// var no aplica //

//Tipos de datos primitivos //
let numOrde = 127  //int
let modulo = "Mis ordenes"  //string
let status = true  //boolean
let tipoPago = 'E'  //char
let preciofinal = 155.99  //float
const CI = 1751503234  //int-inmutable


//Tipos de datos compuestos //
//objetos - arrays - functions
let ordenes = ["Balon", "Camiseta", "Zapatos"]  //array
let detalleOrden = {
    id:1,
    estado:"Activo",
    items:2,
    precio:155.99
} //objeto

//String 
let nombreCompleto = "Edwin Sarango"
nombreCompleto.length  //longitud
nombreCompleto.toUpperCase() //mayusculas
nombreCompleto.toLowerCase() //minuculas
nombreCompleto.trim() //eliminar espacios en blanco
nombreCompleto.charAt(0) //obtener primer caracter
nombreCompleto.includes("Edwin") // verificar si existe un texto

console.log(nombreCompleto.trim())
console.log(nombreCompleto.length)

// ES6 - template String
console.log(`Bienvanido - ${nombreCompleto}`)

//Nmeros 
let cuotas = "6"
console.log(cuotas + 3)

console.log(+cuotas + 3)
console.log(typeof(cuotas))

//Orden de presedencia
console.log(4 * 3 **2)

//booleans
let saldoUsuario = 1000
let saldoTarjeta = '1000'

//comparación valor
console.log(saldoUsuario==saldoTarjeta)
//ES6 - comparación estricta
console.log(saldoUsuario===saldoTarjeta)

//condicionales 
const carritoCompras = []
if (carritoCompras.length===0){
    console.log("El carrito de compras está vacío")
}else{
    console.log("El carrito tiene productos")
}

//ES6- Operador ternario 
const mensaje=carritoCompras.length === 0 ? "El carrito vacío" : "El carrito con productos"
console.log(mensaje)

//iteradores

//objetos 
    //variable de tipo compuesto que permite almacenar varios datos a partir de pares (clave-valor)

let user = {
    name:"Edwin",
    lastname:"Sarango",
    age:21,
    email:"edwin@gmail.com",
    address:{
        city: "Quito",
        telephone:"09987654321"
    },
    password:"1234"
}

delete user.password

user.image="avatar.png"
console.log(user)

//ES6 desestructuración 
let {name, lastname, age, email:correo, address, image} = user   //TODOS LOS CAMBIOS QUEDAN DEFINIDOS CON LET
        //console.log(name)  Remplaza estos fragmentos
        //console.log(lastname)
console.log(correo)
console.log(address.city)

const friends={
    status: true,
    friendslist:['Juan','Maria'],
    sendMail(){
        return `Hola ${this.friendslist[0]} como te va`
    }
}

console.log(friends.sendMail())


const allinformation = {...user,...friends} //almacena la informacion de todos los objetos que desee

console.log(allinformation)
console.log(Object.values(user).includes(" "))  //verificar si todos los valores están vacios 
console.log(Object.keys(user))  //verifica todas las claves 

//Funciones
        //Conjunto de pasos para realizar una tarea específica

//funcion declarativa
function validarUser(){
    console.log("Usuario validado")
}
//funcion expresiva
const validateRol = function(){
    console.log("Rol validado")
}
//ES6 funciones flecha
const validateMail= ()=>{
    console.log("Mail validado")
}
//Rest Operator vs Spread Operator

//parametro por defecto a=56
const finalprice = function({a=56,b},...args){
    console.log(a,b,args)
}
//finalprice(,2,3,4,5,6,7,8)
finalprice({b:99},8,7,6,5)

//return
function typeOfReturn(){
    //return 123
    //return true
    //return "Hola"
    //return ['juan','maria','anita']
    /*return {
        city: "Quito",
        country: "Ecuador"
    }*/
    return saludo=function(){
        console.log("hola")
    }
}
let result = typeOfReturn()
console.log(result)

console.log(typeOfReturn())
result()