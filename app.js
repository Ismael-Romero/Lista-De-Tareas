const { myMenu, pause } = require('./src/menu.js');
const { saveData, readDataBase } = require('./database/save-data');
const { getTaskDescription, deleteTaskFromList, confirm, checkList } = require('./model/actions');

const Tasks = require('./model/tasks');

const main = async () => {

    let option = '';
    const myTasks = new Tasks();
    const readDB = readDataBase();

    if (readDB) { myTasks.loadTaskFromArray(readDB) };
    

    do{
        option = await myMenu();

        switch (option) {
            case 1:
                const description = await getTaskDescription('Descripción > ');
                myTasks.createTask(description);
                break;

            case 2: 
                myTasks.showTasks();
                break;

            case 3:
                myTasks.showCompleteORIncompleteTasks();
                break;

            case 4: 
                myTasks.showCompleteORIncompleteTasks(false);
                break;

            case 5:
                const ids = await checkList(myTasks.getToDoList);
                myTasks.toggleComplete(ids);
                break;

            case 6: 
                const id = await deleteTaskFromList(myTasks.getToDoList);
                if (id !== 0) {
                    const ok = await confirm('¿Estás seguro de borrar esta tarea');
                    if (ok) {
                        myTasks.deleteTask(id);
                        console.log('Tarea Borrada'.red);
                    }
                }
                break;

            default: continue;
        }

        saveData(myTasks.getToDoList);

        await pause();

    } while (option !== 0);
};

main();