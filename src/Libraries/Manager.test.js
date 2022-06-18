const Manager = require("./Manager");

describe("Manager", () => {
  it("should get the instance of new Manager", () => {
    const expected = new Manager({
      name: "Bob",
      id: "123",
      email: "bob@email.com",
    });

    expect(expected).toBeInstanceOf(Manager);
  });

  it("should get role of Manager", () => {
    const expected = new Manager({ role: "Manager" });

    const actual = expected.getRole();
    expect(actual).toEqual(expected.role);
  });

  // - should return the expected name
  it("should return the expected name", () => {
    const expected = new Manager({ name: "Bob" });

    const actual = expected.getName();
    expect(actual).toEqual(expected.name);
  });

  // - should return the expected id
  it("should return the expected id", () => {
    const expected = new Manager({ id: "123" });
    const actual = expected.getId();
    expect(actual).toEqual(expected.id);
  });

  // - should return the expected email
  it("should get the email of the employee", () => {
    const expected = new Manager({ email: "bob@email.com" });
    const actual = expected.getEmail();
    expect(actual).toEqual(expected.email);
  });
});
