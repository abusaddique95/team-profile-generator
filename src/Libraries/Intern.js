// import employee

const Employee = require("./Employee");

// add class and extend to employee

class Intern extends Employee {
  constructor({ name, email, id, school }) {
    {
      super({ name, id, email });
    }
    this.school = school;
    this.role = "Intern";
  }

  generateSchool() {
    return this.school;
  }

  // render the HTML

  generateInternHTML() {
    return `<div class="card m-3 bg-success" style="width: 18rem;">
    <div class="card-body text-center">
        <h5 class="card-title">${this.name}</h5>
        <h6>Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${this.email} target="_blank" class="card-link">${this.email}</a>
        <li class="list-group-item">${this.school}</li>
    </ul>
</div>`;
  }
}

module.exports = Intern;
