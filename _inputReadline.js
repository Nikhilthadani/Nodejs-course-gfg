// Readline - Grab input from user

import { createInterface } from "readline";

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const details = { name: "", email: "", age: "" };

readLine.question("What's your name? ", (nameAns) => {
  details.name = nameAns;

  readLine.question("What's your email? ", (emailAns) => {
    details.email = emailAns;

    readLine.question("What's your age? ", (ageAns) => {
      details.age = ageAns;

      console.log("Your Entered Details: ", details);

      readLine.close();
    });
  });
});
