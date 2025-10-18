import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileCreation = () => {
    console.log("\nChoose an option:");
    console.log("1: Create a file");
    console.log("2: Append to a file");
    console.log("3: Rename a file");
    console.log("4: Delete a file");
    console.log("5: Exit");

    rl.question("Enter your choice: ", (choice) => {
        if (choice === "1") {
            createFile();
        } else if (choice === "2") {
            appendFile();
        } else if (choice === "3") {
            renameFile();
        } else if (choice === "4") {
            deleteFile();
        } else if (choice === "5") {
            console.log("Exiting...");
            rl.close();
        } else {
            console.log("Invalid choice. Try again.");
            fileCreation ();
        }
    });
};

const createFile = () => {
    rl.question("Enter the file name to create: ", (filename) => {
        rl.question("Enter the content for the file: ", (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.log("Error creating file:", err);
                } else {
                    console.log(`File ${filename}.txt created successfully!`);
                }
                fileCreation ();
            });
        });
    });
};

const appendFile = () => {
    rl.question("Enter the file name to append: ", (filename) => {
        rl.question("Enter the content to append: ", (content) => {
            fs.appendFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.log("Error appending file:", err);
                } else {
                    console.log(`Content appended to ${filename}.txt successfully!`);
                }
                fileCreation ();
            });
        });
    });
};

const renameFile = () => {
    rl.question("Enter the current file name: ", (oldName) => {
        rl.question("Enter the new file name: ", (newName) => {
            fs.rename(`${oldName}.txt`, `${newName}.txt`, (err) => {
                if (err) {
                    console.log("Error renaming file:", err);
                } else {
                    console.log(`File renamed to ${newName}.txt successfully!`);
                }
                fileCreation ();
            });
        });
    });
};

const deleteFile = () => {
    rl.question("Enter the file name to delete: ", (filename) => {
        fs.unlink(`${filename}.txt`, (err) => {
            if (err) {
                console.log("Error deleting file:", err);
            } else {
                console.log(`File ${filename}.txt deleted successfully!`);
            }
            fileCreation ();
        });
    });
};


fileCreation ();

