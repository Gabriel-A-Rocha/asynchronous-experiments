const fs = require("fs");

const a = 3;
const b = 4;

const c = a * b;

console.log(c);

function readJSONFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./file.json", (err, data) => {
      err ? resolve("File not found") : reject("File information");
    });
  });
}

readJSONFile()
  .then((resolveResponse) => console.log(resolveResponse))
  .catch((rejectResponse) => console.log(rejectResponse));

console.log(c);

let done = true;

function doSomething() {
  return new Promise((resolve, reject) => {
    done ? resolve("Good news: Promise resolved") : reject("Bad news: Promise rejected");
  });
}

doSomething()
  .then((goodNews) => console.log(goodNews))
  .catch((badNews) => console.log(badNews));

Promise.all([readJSONFile(), doSomething()])
  .then((responses) => {
    console.log(responses);

    console.log(c);
  })
  .catch(() => "Error running promises for the second time");

console.log(c);

/* output:
12
12
12
Good news: Promise resolved
File not found
[ 'File not found', 'Good news: Promise resolved' ]
12
*/
