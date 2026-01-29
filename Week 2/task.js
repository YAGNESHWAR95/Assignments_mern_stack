import { validatePriority,validateTitle,validateDueDate }  from "./validator.js";
   export let tasks = [];
   let counter = 0;
export function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message

                      validateTitle(title);
                      validatePriority(priority);
                      validateDueDate(dueDate);

                    let newTask = {
                      id : ++counter,
                      title,
                      priority,
                      dueDate,
                      completed : false
                    };

                    tasks.push(newTask);
                    }

                    export function completeTask(taskId) {
                      let task = tasks.find((ele) =>  ele.id === taskId )
                      if(task){
                        task.completed = true;
                      }
                      else{
                        return "task is not found"
                      }
                      }
                    
                    export function getAllTasks() {
                      return tasks;
                    }
                    