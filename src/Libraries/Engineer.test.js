const Engineer = require("./Engineer");

describe("Engineer", () => {
    it("should be an instance of an Engineer", () => {
    const name = "Alice";
    const email = "Alice@gmail.com";
    const id = "111";
    Engineer = new Engineer(name, id, email);

    const expected = engineer;
    const actual = new Engineer(name, id, email);
    expect(actual).toEqual(expected);
  });

  it("should return engineer name", () => {
    const expected = "Alice";

    const engineer = new Engineer(name, id, email);
    const actual = engineer.getName();
    expect(actual).toEqual(expected);
  });

  it("should return engineer id", () => {
    const expected = "111";

    const engineer = new Engineer(name, id, email);
    const actual = engineer.getId();
    expect(actual).toEqual(expected);
  });

  it("should return engineer email", () => {
    const expected = "Alice";

    const engineer = new Engineer(name, id, email);
    const actual = engineer.getEmail();
    expect(actual).toEqual(expected);
  });

  it("should return engineer role", () => {
    const expected = "Alice";

    const engineer = new Engineer(name, id, email);
    const actual = engineer.githubUsername();
    expect(actual).toEqual(expected);
  });

}