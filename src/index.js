const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { generateHTML } = require("./Utils/createHTML");

const Manager = require("./libraries/Manager");
const Engineer = require("./libraries/Engineer");
const Intern = require("./libraries/Intern");

const team = [];

const {
  engineerQuestions,
  promptQuestions,
  managerQuestions,
  internQuestions,
  selectionQuestions,
} = require("./Utils/team-questions");

let inProgress = true;

const init = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );
  console.log(manager.getEmail());
  team.push(manager);

  while (inProgress) {
    const select = await inquirer.prompt(selectionQuestions);

    if (select.proceed === "Add an engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );
      team.push(engineer);
    } else if (select.proceed === "Add an intern") {
      const internAnswers = await inquirer.prompt(internQuestions);

      const intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      team.push(intern);
    } else {
      inProgress = false;
    }
  }

  const HtmlGenerator = generateHTML(team);
  const filePath = path.join(__dirname, "../dist/index.html");

  fs.writeFileSync(filePath, HtmlGenerator);
};
init();
