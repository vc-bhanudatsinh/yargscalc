const yargs = require("yargs");

// command for help
yargs.usage("\nUsage: $0 [cmd] <args>").alias("h", "help");

// common function for claclulation
const performOperation = (operation, argv) => {
  if (
    typeof argv.firstOperator !== "number" ||
    typeof argv.secondOperator !== "number"
  )
    return console.log("Please Enter number only");

  switch (operation) {
    case "add":
      console.log(argv.firstOperator + argv.secondOperator);
      break;
    case "subtract":
      console.log(argv.firstOperator - argv.secondOperator);
      break;
    case "divide":
      console.log(argv.firstOperator / argv.secondOperator);
      break;
    case "multiply":
      console.log(argv.firstOperator * argv.secondOperator);
      break;
    default:
      console.log("Wrong Operator found");
  }
};

// common operation object used in declaring commands
const operatorObject = {
  firstOperator: {
    type: "number",
    demandOption: true,
    describe: "Operator one",
  },
  secondOperator: {
    type: "number",
    describe: "Operator second",
  },
};

// Addition Command
yargs
  .command("add", "Perform Addition", operatorObject, function (argv) {
    console.log("add");
    performOperation("add", argv);
  })
  .example("\n node $0 add --firstOperator=123 --secondOperator=123");

// Subtraction Command
yargs
  .command("subtract", "Perform Subtract", operatorObject, function (argv) {
    console.log("subtract");
    performOperation("subtract", argv);
  })
  .example("\n node $0 subtract --firstOperator=123 --secondOperator=123");

// Multiply Command
yargs
  .command("multiply", "Perform Multiply", operatorObject, function (argv) {
    console.log("multiply");
    performOperation("multiply", argv);
  })
  .example("\n node $0 multiply --firstOperator=123 --secondOperator=123");

// Divide Command
yargs
  .command("divide", "Perform Divide", operatorObject, function (argv) {
    console.log("divide");
    performOperation("divide", argv);
  })
  .example("\n node $0 divide --firstOperator=123 --secondOperator=123");

console.log(yargs.argv);
