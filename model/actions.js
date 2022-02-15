const inquirer = require("inquirer");

const getTaskDescription = async (message) => {
    const qn = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                } return true;
            }
        }
    ];
    const { description } = await inquirer.prompt(qn);
    return description;
};

const deleteTaskFromList = async (tasks = []) =>{

    const choices = tasks.map( (task, i) => {
        const index = `${i+1})`.green;
        return {
            value: task.id,
            name: `${index} ${task.description}`
        };
    });

    choices.unshift({
        value: 0,
        name: '0) Cancelar'.blue
    });

    const qn = [
        {
            type: 'list',
            name: 'id',
            message: 'Tarea seleccionada >>>',
            choices
        }
    ];

    const { id } = await inquirer.prompt(qn);
    return id;
};

const confirm = async (message) => {
    const qn = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(qn);
    return ok;
}

const checkList = async (task = []) => {

    const choices = task.map( (task, i) => {
        const index = `${i+1})`.green;
        return {
            value: task.id,
            name: `${index} ${task.description}`,
            checked: (task.completed) ? true : false
        };
    });

    const qn = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Tareas completadas >>> ',
            choices
        }
    ];
    const { ids } = await inquirer.prompt(qn);
    return ids;
}
module.exports = { 
    getTaskDescription,
    deleteTaskFromList,
    confirm,
    checkList
};