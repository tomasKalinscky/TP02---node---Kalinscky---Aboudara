import { URL } from 'url';

function parsearUrl(laURL) {
    const url = new URL(laURL);

    const objetoUrl = {
        host: `${url.protocol}//${url.host}`,
        pathname: url.pathname,
        parametros: Object.fromEntries(url.searchParams.entries())
    };

    return objetoUrl;
}

let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
