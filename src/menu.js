require('colors');
const inquirer = require('inquirer');
const qnMenu = require('./inquirer-questions');

const myMenu = async () => {
    console.clear();
    console.log(`|------------------------------------------|`.green);
    console.log(`| Lista de tareas                          |`.green);
    console.log(`|------------------------------------------|`.green);

    const { option } = await inquirer.prompt( qnMenu );
    return option;
};

const pause = async () => {
    console.log('\n \n');
    const qn = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.blue} para continuar\n \n`
        }
    ];

    await inquirer.prompt(qn);
};


module.exports = { myMenu, pause}