const argv = require('./config/yargs').argv;
//para podre usarlo como se estaba utilizando
//porque el de arriba es el objeto que es todo el require
//y dentro de ese objeto esta el argv
//argv.argv;
//pero yo puedo extraer unicamente lo que me interesa del require
//y asignarlo directamente a esa constante para eso hago .argv;

const colors = require('colors/safe');


const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

//argv._[0] para obtener referencia al arreglo y en la primera posicion
//hay ya voy a tener los comandos crear, listar etc

let comando = argv._[0];

switch(comando){

    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.blue(archivo)))
            .catch(e => console.log(e));
        //console.log('crear');
        break;

    default:
        console.log('Comando no reconocido');
}


//console.log(argv);

//let base = '9';

//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log('limite',argv.limite);
//console.log(argv2);

//let parametro = argv[2];
//split para separar elementos, convertir de un string a un arreglo
//quiero separar despues del = y me interesa el segundo elemento
//let base = parametro.split('=')[1];


//console.log(base);

// el --save indica que esa dependencia es necesaria para el projecto

// --save-dev es una dependencia de desarrollo, local mente en este projecto nadamas