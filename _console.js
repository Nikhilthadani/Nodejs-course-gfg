import { Console } from "console";
import { createWriteStream } from "fs";

// const writableSt = createWriteStream("./debug-log.txt");
const logger = new Console(process.stdout, process.stderr);

logger.log("HELLO");
logger.log("HELLO");
logger.log("HELLO");
logger.log("HELLO");
logger.log("HELLO");
logger.log("HELLO");

/* Normal
console.time("Time");
console.log("Hello");
console.error("Hello");
console.debug("Hello");

console.table([
  { name: "nikhil", age: "25" },
  { name: "james", age: "51" },
]);
console.timeLog("Time");
*/
