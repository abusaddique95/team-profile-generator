const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./libraries/Manager");
const Engineer = require("./libraries/Engineer");
const Intern = require("./libraries/Intern");

const {
  engineerQuestions,
  promptQuestions,
  managerQuestions,
  internQuestions,
  selectionQuestions,
} = require("./utils/questions");

let inProgress = true;

const init = async () => {
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );
  team.push(manager);

  const createHeader = (string) => {
    return;
    `<header class="jumbotron m-2 p-3 bg-primary">
    <div class="container">
        <h1 class="display-4 text-center">${string}</h1>
    </div>
</header>`;
  };

  const createManagerCard = team;

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
    } else if (selection.proceed === "Add an intern") {
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

  const HtmlGenerator = generatedHtml(team);
  const filePath = path.join(__dirname, "../dis/index.html");

  fs.writeFileSync(filePath, HtmlGenerator);
};
init();
