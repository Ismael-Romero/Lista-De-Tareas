require('colors');
const Task = require('./task');

class Tasks {
    _list = {}

    constructor(){
        this._list = {};
    }


    //Crea una tarea en el arreglo de tareas para después ser almacenada en database.json
    createTask(description = ''){
        const myTask = new Task(description);
        this._list[myTask.id] = myTask;
    }

    //Se obtiene el Array de la lista de tareas
    get getToDoList(){
        const list = [];

        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    //Se muestran todas las tareas
    showTasks(){
        this.getToDoList.forEach( (task, i) => {
            const index = `${i+1})`.green;
            const { description, completed } = task;
            const STATUS = (completed)
                ? 'Completada'.green
                : 'Pendiente '.red;
            console.log(` ${index} ${STATUS} ::::...... ${description} `);
        });
    }

    //Se muestran las tareas completas o incompletas según sea la llamada
    showCompleteORIncompleteTasks( finished = true ){
        let count = 0;
        console.log('\n');
        this.getToDoList.forEach( (task) => {
            const { description, completed } = task;
            const STATUS = ( completed )
                ? 'Completada'.green
                : 'Pendiente '.red;

            if (finished){
                if(completed){
                    count += 1;
                    console.log(` ${ (count.toString()+')').green } ${completed.green} ::::...... ${description}`);
                }
            }else{
                if(!completed){
                    count += 1;
                    console.log(` ${ (count.toString()+')').green} ${STATUS.red} ::::...... ${description}`);
                } 
            }
        });
    }

    toggleComplete(ids = []){
        ids.forEach( id => {
            const task = this._list[id];
            if(!task.completed){
                task.completed = new Date().toISOString();
            }
        });

        this.getToDoList.forEach( task => {
            if(!ids.includes(task.id)){
                this._list[task.id].completed = null;
            }
        });
    }

    //Borra la tarea
    deleteTask(id){
        if (this._list[id]){
            delete this._list[id];
        }
    }

    loadTaskFromArray( tasks = [] ){
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }
}

module.exports = Tasks;