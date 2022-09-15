// import employee

const Employee = require("./Employee");

// add class and extend to employee

class Engineer extends Employee {
  constructor({ name, email, id, githubUsername }) {
    {
      super({ name, id, email });
    }
    this.githubUsername = githubUsername;
    this.role = "Engineer";
  }

  generateUsername() {
    return this.githubUsername;
  }

  // render the HTML

  toString() {
    return `<div class="card-body text-center">
        <h5 class="card-title">${this.name}</h5>
        <h6>Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${this.email}" target="_blank" class="card-link">${this.email}</a>
            <li class="list-group-item">Github</li>
            <a href="https://github.com/${this.githubUsername}" target="_blank" class="card-link">https://github.com/${this.githubUsername}</a> 
    </ul>
</div>`;
  }
}

module.exports = Engineer;
