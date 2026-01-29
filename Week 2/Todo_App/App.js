import { addTask,completeTask,getAllTasks,tasks } from "./task.js";
 // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
                addTask('gym','high','2023-08-08');
                addTask('work','high','2034-09-26');
                let res = getAllTasks();
                console.log(res)
                completeTask(2)
                res = getAllTasks();
                console.log(res)

                
