class Producto {
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }


    sumarIva() {
    return this.precio * 1.21;
}

    vender(){
    this.disponible = false;
}

    precioSugerido(){
    return this.precio * 1.21 * 1.75;
}

}

var arrayProductos = [];
do {
    var comprobacion = prompt(`Ingrese el nombre del producto o fin para finarlizar`);
    if (comprobacion == "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP = comprobacion;
    var precioP = prompt(`Ingrese el precio del producto`);
    var detalleP = prompt(`Ingrese el detalle del producto`);
    var cantidadP = prompt(`Ingrese la cantidad comprada`);
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);

for (var producto of arrayProductos) {
    document.write("<h3> El producto ingresado es: " +producto.nombre + "</h3>");
    document.write("<h3> El detalle del producto es: "+producto.detalle + "</h3>");
    document.write("<h3> Cantidad en stock del producto es: "+ producto.cantidad + "</h3>");
    document.write("<h3> El precio del producto + IVA (unidad) es: "+ producto.sumarIva() + "</h3>");
    document.write("<h3> El precio sugerido de venta es: "+ producto.precioSugerido() + "</h3>");

}
console.log(Producto.nombre);
console.log(Producto.detalle);
console.log(Producto.cantidad);
console.log(Producto.sumarIva);
console.log(Producto.precioSugerido);





// Poco stock - Menos de 5 productos

var pocoStock = arrayProductos.filter(producto => producto.cantidad <=5);
console.log(`Productos con poco stock, comprar nuevamente: `);
console.log(pocoStock);
document.write("<h3> Quedan menos de 5 unidades </h3>");

for (var producto of pocoStock) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: "+ producto.cantidad + "</h3></li></ul><br>");
}

// Sin stock

var sinStock = arrayProductos.filter(producto => producto.cantidad ==0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de productos sin Stock : </h3>");

for (var producto of sinStock) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: "+ producto.cantidad + "</h3></li></ul><br>");
}

// Buscar producto espicifico por nombre

var ingresado = prompt(`Ingrese el producto`);
var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("<h3>Productos ingresados para la busqueda: </h3>");

for (var producto of prodIngresado) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Precio: "+ producto.precio + "</h3></li></ul><br>");
}

// Ordenar por cantidad

var ordenadosCantidad = []; //Declaro array ordenadosCantidad en nueva poss de memoria
ordenadosCantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function(a, b){
    return a.cantidad- b.cantidad;
});
console.log(`Orden por cantidad ascendente: `);
console.log(ordenadosCantidad);
document.write("<h3>Lista de productos ordenados por cantidad: </h3>");

for (var producto of ordenadosCantidad) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Cantidad: "+ producto.cantidad + "</h3></li></ul><br>");
}

// Orden por precio

var ordenadosPrecio = []; //Declaro array ordenadosCantidad en nueva poss de memoria
ordenadosPrecio = arrayProductos.map(elemento => elemento);
ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function(a, b){
    return a.precio- b.precio;
});
console.log(`Orden por precio ascendente: `);
console.log(ordenadosPrecio);
document.write("<h3>Lista de productos ordenados por precio: </h3>");

for (var producto of ordenadosPrecio) {
    document.write("<ul><li><h3>Nombre: "+ producto.nombre + "</h3></li>");
    document.write("<li><h3>Detalle: "+ producto.detalle + "</h3></li>");
    document.write("<li><h3>Precio: "+ producto.precio + "</h3></li></ul><br>");
}