

/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
return x+y;
}
function dividir(x,y) {
    return x/y;
}
const restar = (a,b) => {
    return a-b;
}
const multiplicar = (a, b) => {
return a*b;
};
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, dividir, restar, multiplicar};
