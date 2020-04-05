const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base, limite, comando) => {

    let mensaje = '';

    console.log('=================================='.black);
    console.log(`*** Se presenta la tabla del ${ base } ***`.white);
    console.log('=================================='.red);
    
    let data = '';

    for (let i = 0; i < limite; i++) {
        data += `${base} * ${(i + 1)} = ${(base * (i + 1))}     
`;
    }

    if (comando === 'listar') {
        console.log(data.random);
        mensaje = colors.random('tabla ') + colors.brightRed('listada.');
    }

    if (comando === 'crear') {
        fs.writeFile(`assets/data${base}.txt`, data, (err) => {
            if (err) throw err;
        });

        mensaje = 'Documento ' + colors.inverse('creado con éxito');

        
    }

    return mensaje;
}

module.exports = {
    crearArchivo 
}