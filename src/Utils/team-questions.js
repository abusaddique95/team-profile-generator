const managerQuestions = [
  {
    type: "input",
    name: "teams name",
    message: "Please enter title of your team",
  },

  {
    type: "input",
    name: "name",
    message: "Please enter team manager name",
  },

  {
    type: "input",
    name: "id",
    message: "Please enter manager ID:",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter manager email address:",
  },

  {
    type: "input",
    name: "office number",
    message: "Please enter manager office number:",
  },
];

selectionQuestions = [
  {
    type: "list",
    name: "proceed",
    message: " What would you like to do next:",
    choices: ["Add an engineer", "Add an intern", "Quit application"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter your team engineers name",
  },

  {
    type: "input",
    name: "id",
    message: "Please enter your engineers ID:",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your engineers email address:",
  },

  {
    type: "input",
    name: "github",
    message: "Please enter engineer github username::",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter team interns name",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter intern ID:",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter intern email address:",
  },

  {
    type: "input",
    name: "school",
    message: "Please enter intern school:",
  },
];

module.exports = {
  managerQuestions,
  selectionQuestions,
  engineerQuestions,
  internQuestions,
};
