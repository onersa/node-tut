console.log(__dirname);
console.log(`global __dirname: ${__dirname}`);
console.log(`global __filename: ${__filename}`);
console.log(`global process: ${process}`);
let counter = 0;
let intervalID = setInterval(() => {
  counter++;
  console.log(`Counter:${counter}`);
  if (counter === 15) {
    clearInterval(intervalID);
  }
}, 1000);

console.log("Starting interval...");
