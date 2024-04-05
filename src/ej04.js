import fs from 'fs';

const copiar = (origen, destino) => {
    fs.readFile(origen, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo de entrada:', err);
            return;
        }

        fs.writeFile(destino, data, 'utf8', err => {
            if (err) {
                console.error('Error al escribir en el archivo de salida:', err);
                return;
            }

            console.log('Archivo copiado con éxito!');
        });
    });
};

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);