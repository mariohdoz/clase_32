const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        // demand: true,
        alias: 'l'
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de múltiplicar', opts)
    .command('crear', 'Imprime en documento la tabla de múltiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}