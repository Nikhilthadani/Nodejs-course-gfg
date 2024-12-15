import fs from "fs";

const data = "\nTHis daata is about to be in file.\n";

//
// fs.writeFileSync("test.txt", data, { encoding: "utf-8" });

// fs.writeFileSync("test.txt", "", { encoding: "utf-8" });

// fs.readdir("./", (err, files) => {
//   if (!err) {
//     console.log(files[0]);
//     files.forEach((file) => {
//       fs.readFile(file, (err, data) => {
//         if (!err) {
//           console.log(`-------------THIS IS FILE ${file}-------------`);
//           console.log(data.toString());
//         }
//       });
//     });
//   }
// });

fs.appendFileSync("test.txt", data, { encoding: "utf-8" });
