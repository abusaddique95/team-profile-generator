const Intern = require("./Intern");
const { name, id, email, role } = require("./Employee");

describe("Intern", () => {
  it("should create and instance of Intern", () => {
    const expected = new Intern({
      name: "Bob Smith",
      email: "bobsmith@bob.com",
      id: "123",
    });

    expect(expected).toBeInstanceOf(Intern);
  });

  it("should expect a name of Intern", () => {
    const expected = new Intern({ name: "Bob Smith" });

    const actual = expected.getName();
    expect(actual).toEqual(expected.name);
  });

  it("should expect a valid id", () => {
    const expected = new Intern({ id: "123" });

    const actual = expected.getId();
    expect(actual).toEqual(expected.id);
  });

  it("should expect a valid email", () => {
    const expected = new Intern({ email: "bobsmith@bob.com" });

    const actual = expected.getEmail();
    expect(actual).toEqual(expected.email);
  });

  it("should expect a valid role", () => {
    const expected = new Intern({ role: "Intern" });

    const actual = expected.getRole();
    expect(actual).toEqual(expected.role);
  });
});
