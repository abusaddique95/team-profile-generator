const Manager = require("./Manager");

const expected = new Manager("Bob", "1", "bob@email.com", "123");

describe("Manager", () => {
  it("should get the instance of new Manager", () => {
    expect(expected).toBeInstanceOf(Manager);
  });

  it("should get role of Manager", () => {
    const actual = expected.getRole();
    expect(actual).toEqual("Manager");
  });

  // - should return the expected name
  it("should return the expected name", () => {
    const actual = expected.getName();
    expect(actual).toEqual("Bob");
  });

  // - should return the expected id
  it("should return the expected id", () => {
    const actual = expected.getId();
    expect(actual).toEqual("1");
  });

  // - should return the expected email
  it("should get the email of the employee", () => {
    const actual = expected.getEmail();
    expect(actual).toEqual("bob@email.com");
  });

  it("should get the office number", () => {
    const actual = expected.generateOfficeNumber();
    expect(actual).toEqual("123");
  });
});
