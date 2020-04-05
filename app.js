const { crearArchivo } = require('./assets/multiplicar')
const { argv } = require('./config/yargs')

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

crearArchivo(base, limite, comando)
            .then((respuesta) => {
                console.log(respuesta)
            })
            .catch(e => console.log(e));