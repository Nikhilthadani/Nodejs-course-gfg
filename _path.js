const path = require("path");

// Absolute Path of This Directory
console.log(__dirname);

// Absolute Path of This File
console.log(__filename);

// input-1: nikhil, input-2: images
console.log(path.join("nikhil", "images", "image.png"));

// Grab absolute path of a file
console.log(path.resolve("debug-log.txt"));

// Get a directory
const pathOfFile = "F:/Nodejs GFG/Course/sec1/debug-log.txt";
console.log(path.dirname(pathOfFile));

// This "/" will add path just after the disk
// F:\folder1\folder2\folder3
console.log(path.resolve("/folder1", "folder2", "folder3"));

// Removing This "/" will add path after this directory
// F:\Nodejs GFG\Course\sec1\folder1\folder2\folder3
console.log(path.resolve("folder1", "folder2", "folder3"));

// "//" this will make this root path
// F:\folder2\folder3
console.log(path.resolve("folder1", "//older2", "folder3"));

console.log(path.parse("users/nikhil/images/image.png"));

console.log(
  path.format({
    root: "",
    dir: "users/nikhil/images",
    base: "image.png",
    ext: ".png",
    name: "image",
  })
);
