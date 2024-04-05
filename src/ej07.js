// Importar la biblioteca currency-map-country
import currencyMap from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    // Verificar si el país existe en el mapeo de monedas
    if (currencyMap[codigoPais]) {
        return currencyMap[codigoPais];
    } else {
        return null;
    }
}

// Ejemplo de uso
let monedaDelPais, codigoPais;
codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
