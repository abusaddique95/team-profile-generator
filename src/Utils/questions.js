const promptQuestions = [
  {
    type: "list",
    name: "add",
    message: " What would you like to do next:",
    choices: ["Add an Engineer", "Add an Intern", "Add a Manager", "Quit"],
  },
];

module.exports = { promptQuestions };
