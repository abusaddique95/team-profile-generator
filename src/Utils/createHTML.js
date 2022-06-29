const generateManager = (manager) => {
  return `<div class="card m-3 bg-warning" style="width: 18rem;">
    <div class="card-body text-center">
        <h5 class="card-title">${manager.name}</h5>
        <h6>Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${manager.email}" target="_blank" class="card-link">${manager.email}/a>
        <li class="list-group-item">${manager.officeNumber}</li>
    </ul>
</div>`;
};

const generateEngineer = (engineer) => {
  return `<div class="card-body text-center">
        <h5 class="card-title">${engineer.name}</h5>
        <h6>Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${engineer.email}" target="_blank" class="card-link">${engineer.email}</a>
            <li class="list-group-item">Github</li>
            <a href="https://github.com/${engineer.githubUsername}" target="_blank" class="card-link">https://github.com/${this.githubUsername}</a> 
    </ul>
</div>`;
};

const generateIntern = (intern) => {
  return `<div class="card m-3 bg-success" style="width: 18rem;">
    <div class="card-body text-center">
        <h5 class="card-title">${intern.name}</h5>
        <h6>Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${intern.email} target="_blank" class="card-link">${intern.email}</a>
        <li class="list-group-item">${intern.school}</li>
    </ul>
</div>`;
};

// map function

// const createHTML = (teamName, teamMember) => {
//     const generatedCards = {
//         manager: generateManager(teamMember)
//         intern: teamMember.intern.map(generateIntern),
//         engineer: teamMember.engineer.map(generateEngineer),
//      teamName,
//     };

//     return generatedCards;
// };

const generateHTML = (data) => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>team-profile-generator</title>
    </head>
    
    <body>
    
        <header class="jumbotron m-2 p-3 bg-primary">
            <div class="container">
                <h1 class="display-4 text-center">${data.teamName}</h1>
            </div>
        </header>
        ${data.manager}
        ${data.interns.join("")}
        ${data.engineers.join("")}
        </body>
        </html>`;
};

module.exports = {
  generateHTML,
};
