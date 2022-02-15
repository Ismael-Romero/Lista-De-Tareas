require('colors');

const opts = (index) => `${(index+')').green}`;

const qnMenu = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué deseas hacer?',
        choices: [
            { 
                value: 1, 
                name: `${opts(1)} Crear una tarea`
            },
            { 
                value: 2, 
                name: `${opts(2)} Listar mis tareas`
            },
            { 
                value: 3, 
                name: `${opts(3)} Listar tareas completadas`
            },
            { 
                value: 4, 
                name: `${opts(4)} Listar tareas pendientes`
            },
            { 
                value: 5, 
                name: `${opts(5)} Completar tarea`
            },
            { 
                value: 6, 
                name: `${opts(6)} Borrar Tarea`
            },
            { 
                value: 0, 
                name: `${opts(0)} Salir`
            },
        ]
    }
];

module.exports =  qnMenu ;