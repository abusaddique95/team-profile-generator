const Engineer = require("./Engineer");
const { name, id, email, role } = require("./Employee");

describe("Engineer", () => {
  it("should create and instance of Engineer", () => {
    const expected = new Engineer({
      name: "Bob Smith",
      email: "bobsmith@bob.com",
      id: "123",
    });

    expect(expected).toBeInstanceOf(Engineer);
  });

  it("should expect a name of Engineer", () => {
    const expected = new Engineer({ name: "Bob Smith" });

    const actual = expected.getName();
    expect(actual).toEqual(expected.name);
  });

  it("should expect a valid id", () => {
    const expected = new Engineer({ id: "123" });

    const actual = expected.getId();
    expect(actual).toEqual(expected.id);
  });

  it("should expect a valid email", () => {
    const expected = new Engineer({ email: "bobsmith@bob.com" });

    const actual = expected.getEmail();
    expect(actual).toEqual(expected.email);
  });

  it("should expect a valid role", () => {
    const expected = new Engineer({ role: "Engineer" });

    const actual = expected.getRole();
    expect(actual).toEqual(expected.role);
  });
});
