const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("Something");
    }, 1500);
  });
};

console.log(1);

const response = await doSomethingAsync();

console.log(response);
console.log(2);

console.log(3);

/* output:
1
Something
2
3
*/
