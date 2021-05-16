const fs = require("fs");

const a = 3;
const b = 4;

const c = a * b;

console.log(c);

fs.readFile("./file.json", (err, data) => {
  return err ? console.log(err) : console.log(data);
});

console.log(c);

(doSomething = () => {
  setTimeout((err) => {
    return err ? console.log(err) : console.log("doSomething after timeout");
  }, 1500);
})();

console.log(c);

/* output:
12
12
12
fs error
doSomething after timeout
*/
