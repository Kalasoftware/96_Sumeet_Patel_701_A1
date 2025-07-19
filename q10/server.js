

console.log(" Current directory:", __dirname);

console.log("Current file:", __filename);

console.log("This is a message using console.log");


setTimeout(() => {
  console.log(" This message is shown after 4 seconds");
}, 4000);


console.log(" Process working directory:", process.cwd());
