
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Mark Task as Complete");
    console.log("4: Delete a Task");
    console.log("5: Exit");
    rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
    if(option === "1") {
        rl.question("Enter the Task: ", (task) => {
            todos.push({ task, completed: false });
            console.log("Task added:", task);
            showMenu();
        });
    } 
    else if(option === "2") {
        console.log("\nYour Todo List:");
        if(todos.length === 0){
            console.log("No tasks available.");
        } else {
            todos.forEach((item, index) => {
                const status = item.completed ? " Completed" : " Pending";
                console.log(`${index + 1}. ${item.task} - ${status}`);
            });
        }
        showMenu();
    } 
    else if(option === "3") {
        if(todos.length === 0){
            console.log("No tasks to mark as complete.");
            showMenu();
        } else {
            rl.question("Enter the task number to mark as complete: ", (num) => {
                const index = parseInt(num) - 1;
                if(index >= 0 && index < todos.length){
                    todos[index].completed = true;
                    console.log(`Task "${todos[index].task}" marked as complete!`);
                } else {
                    console.log("Invalid task number.");
                }
                showMenu();
            });
        }
    } 
    else if(option === "4") {
        if(todos.length === 0){
            console.log("No tasks to delete.");
            showMenu();
        } else {
            rl.question("Enter the task number to delete: ", (num) => {
                const index = parseInt(num) - 1;
                if(index >= 0 && index < todos.length){
                    const removed = todos.splice(index, 1);
                    console.log(`Task "${removed[0].task}" deleted!`);
                } else {
                    console.log("Invalid task number.");
                }
                showMenu();
            });
        }
    } 
    else if(option === "5") {
        console.log("Good Bye!");
        rl.close();
    } 
    else {
        console.log("Invalid Option. Please try again.");
        showMenu();
    }
};

showMenu();
