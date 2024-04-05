import { URL } from 'url';

function parsearUrl(laURL) {
    try {
        const url = new URL(laURL);

        const objetoUrl = {
            host: `${url.protocol}//${url.host}`,
            pathname: url.pathname,
            parametros: Object.fromEntries(url.searchParams.entries())
        };

        return objetoUrl;
    } catch (error) {
        console.error('Error al pasar la URL:', error.message);
        return {}; 
    }
}

let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
