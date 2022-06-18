const Intern = require("./Intern");

describe("Intern", () => {
  it("should be an instance of an intern", () => {
    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const school = "university of wolverhampton";
    engineer = new Intern(name, id, email);

    const expected = Intern;
    const actual = new Intern(name, id, email);
    expect(actual).toEqual(expected);
  });

  it("should return intern name", () => {
    const expected = "Adam";

    const intern = new Intern(name, id, email);

    const actual = intern.getName;

    expect(actual).toEqual(expected);
  });

  it("should return intern email", () => {
    const expected = "Adam@gmail.com";

    const intern = new Intern(name, id, email);

    const actual = intern.getEmail;

    expect(actual).toEqual(expected);
  });

  it("should return intern ID", () => {
    const expected = "111";

    const intern = new Intern(name, id, email);

    const actual = intern.getId;

    expect(actual).toEqual(expected);
  });

  it("should return intern school", () => {
    const expected = "university of wolverhampton";

    const intern = new Intern(name, id, email);

    const actual = intern.generateSchool;

    expect(actual).toEqual(expected);
  });

  it("should return intern", () => {
    const expected = "intern";

    const intern = new Intern(name, id, email);

    const actual = intern.getRole;

    expect(actual).toEqual(expected);
  });
});
