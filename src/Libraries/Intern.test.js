const Intern = require("./Intern");

describe("Intern", () => {
  it("should be an instance of an intern", () => {
    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const school = "university of wolverhampton";
    intern = new Intern(name, id, email, school);

    const expected = intern;
    const actual = new Intern(name, id, email, school);
    expect(actual).toEqual(expected);
  });

  it("should return intern name", () => {
    const expected = "Bob";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const school = "university of wolverhampton";

    const intern = new Intern(name, id, email, school);

    const actual = intern.getName();
    expect(actual).toEqual(expected);
  });

  it("should return intern email", () => {
    const expected = "Bob@gmail.com";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const school = "university of wolverhampton";

    const intern = new Intern(
      "Bob",
      "1",
      "Bob@gmail.com",
      "university of wolverhampton"
    );

    const actual = intern.getEmail();
    expect(actual).toEqual(expected);
  });

  it("should return intern ID", () => {
    const expected = "1";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const school = "university of wolverhampton";

    const intern = new Intern(
      "Bob",
      "1",
      "Bob@gmail.com",
      "university of wolverhampton"
    );

    const actual = intern.getId();
    expect(actual).toEqual(expected);
  });

  it("should return intern school", () => {
    const expected = "university of wolverhampton";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const school = "university of wolverhampton";

    const intern = new Intern(
      "Bob",
      "1",
      "Bob@gmail.com",
      "university of wolverhampton"
    );

    const actual = intern.generateSchool();
    expect(actual).toEqual(expected);
  });

  it("should return intern", () => {
    const expected = "intern";

    const name = "Bob";
    const email = "Bob@gmail.com";
    const id = "1";
    const school = "university of wolverhampton";

    const intern = new Intern(
      "Bob",
      "1",
      "Bob@gmail.com",
      "university of wolverhampton"
    );

    const actual = intern.getRole();
    expect(actual).toEqual(expected);
  });
});
