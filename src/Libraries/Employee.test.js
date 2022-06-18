const Employee = require("./Employee");
const { name, id, email, role } = require("./Employee");

describe("Employee", () => {
  it("should create and instance of Employee", () => {
    const expected = new Employee({
      name: "Bob Smith",
      email: "bobsmith@bob.com",
      id: "123",
    });

    expect(expected).toBeInstanceOf(Employee);
  });

  it("should expect a name of employee", () => {
    const expected = new Employee({ name: "Bob Smith" });

    const actual = expected.getName();
    expect(actual).toEqual(expected.name);
  });

  it("should expect a valid id", () => {
    const expected = new Employee({ id: "123" });

    const actual = expected.getId();
    expect(actual).toEqual(expected.id);
  });

  it("should expect a valid email", () => {
    const expected = new Employee({ email: "bobsmith@bob.com" });

    const actual = expected.getEmail();
    expect(actual).toEqual(expected.email);
  });

  it("should expect a valid role", () => {
    const expected = new Employee({ role: "Employee" });

    const actual = expected.getRole();
    expect(actual).toEqual(expected.role);
  });
});
