// import employee

const Employee = require("./Employee");

// add class and extend to employee

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  generateOfficeNumber() {
    return this.officeNumber;
  }

  // render the HTML

  toString() {
    return `<div class="card m-3 bg-warning" style="width: 18rem;">
    <div class="card-body text-center">
        <h5 class="card-title">${this.name}</h5>
        <h6>Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${this.email}" target="_blank" class="card-link">${this.email}/a>
        <li class="list-group-item">${this.officeNumber}</li>
    </ul>
</div>`;
  }
}

module.exports = Manager;
