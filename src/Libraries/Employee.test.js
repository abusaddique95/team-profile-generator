const Employee = require("./Employee");

describe("Employee", () => {
  it("should get the instance of new employee", () => {
    const expected = new Employee({
      name: "Bob",
      id: "123",
      email: "bob@email.com",
    });

    expect(expected).toBeInstanceOf(Employee);
  });

  it("should get role of employee", () => {
    const expected = new Employee({ role: "Employee" });

    const actual = expected.getRole();
    expect(actual).toEqual(expected.role);
  });

  // - should return the expected name
  it("should return the expected name", () => {
    const expected = new Employee({ name: "Bob" });

    const actual = expected.getName();
    expect(actual).toEqual(expected.name);
  });

  // - should return the expected id
  it("should return the expected id", () => {
    const expected = new Employee({ id: "123" });
    const actual = expected.getId();
    expect(actual).toEqual(expected.id);
  });

  // - should return the expected email
  it("should get the email of the employee", () => {
    const expected = new Employee({ email: "bob@email.com" });
    const actual = expected.getEmail();
    expect(actual).toEqual(expected.email);
  });
});
