const Manager = require("./Manager");

// describe("Manager", () => {
//   it("should be an instance of a manager", () => {
//     const name = "Bob";
//     const email = "Bob@gmail.com";
//     const id = "12";
//     const officeNumber = "4567";

//     const expected = Manager;
//     const actual = new Manager(name, id, email);
//     expect(actual).toEqual(expected);
//   });

describe("Manager", () => {
  it("should return manager name", () => {
    const expected = "Bob Smith";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "12";
    const officeNumber = "4567";

    const manager = new Manager("bob", "bob@gmail.com", "12", "4567");

    const actual = manager.getName();

    expect(actual).toEqual(expected);
  });

  it("should return manager email", () => {
    const expected = "Bob@gmail.com";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "12";
    const officeNumber = "4567";

    const manager = new Manager("bob", "bob@gmail.com", "12", "4567");

    const actual = manager.getEmail();

    expect(actual).toEqual(expected);
  });

  it("should return manager ID", () => {
    const expected = "12";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "12";
    const officeNumber = "4567";

    const manager = new Manager("bob", "bob@gmail.com", "12", "4567");

    const actual = manager.getId();

    expect(actual).toEqual(expected);
  });

  it("should return office number", () => {
    const expected = "4567";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "12";
    const officeNumber = "4567";

    const manager = new Manager("bob", "bob@gmail.com", "12", "4567");

    const actual = manager.generateOfficeNumber();

    expect(actual).toEqual(expected);
  });

  // it("should return manager", () => {
  //   const expected = "manager";

  //   const manager = new Manager(name, id, email);

  //   const actual = Manager.getRole();

  //   expect(actual).toEqual(expected);
  // });
});
