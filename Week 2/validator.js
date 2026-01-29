          
        // i. validator.js - Input validation
        //               // TODO: Export these validation functions
                      
        //               // 1. Validate task title (not empty, min 3 chars)
        //               function validateTitle(title) {
        //                 // Your code here
        //               }
                      
        //               // 2. Validate priority (must be: low, medium, high)
        //               function validatePriority(priority) {
        //                 // Your code here
        //               }
                      
        //               // 3. Validate due date (must be future date)
        //               function validateDueDate(date) {
        //                 // Your code here
        //               }

        let title;
        let priority;
        export function validateTitle(title) {
            if(title.length === 0){
                return "Title is empty"
            }
            else if(title.length <= 3){
                return "title is less than 3 char"
            }
        }

        export function validatePriority(priority){
            if(priority === 'medium' || priority === 'low' || priority === 'high')
                return "priority is valid"
            else
                return "priority is invalid"
        }

        export function validateDueDate(dateString) {
                const date = new Date(dateString); 
         return !isNaN(date) && date.toISOString().slice(0, 10) === dateString;
        }

        


