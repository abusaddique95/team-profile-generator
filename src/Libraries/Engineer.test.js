const Engineer = require("./Engineer");

describe("Engineer", () => {
  it("should be an instance of an Engineer", () => {
    const data = {
      name: "Alice",
      email: "Alice@gmail.com",
      id: "111",
      username: "alicesmith55",
    };

    engineer = new Engineer(data);

    const expected = engineer;
    const actual = new Engineer(data);
    expect(actual).toEqual(expected);
  });
});

describe("Engineer", () => {
  it("should return engineer name", () => {
    const expected = "Alice";
    const name = "Alice";

    const engineer = new Engineer(data);
    const actual = engineer.getName();
    expect(actual).toEqual(expected);
  });

  it("should return engineer id", () => {
    const expected = "111";

    const engineer = new Engineer(data);
    const actual = engineer.getId();
    expect(actual).toEqual(expected);
  });

  it("should return engineer email", () => {
    const expected = "Alice";

    const engineer = new Engineer(data);
    const actual = engineer.getEmail();
    expect(actual).toEqual(expected);
  });

  it("should return engineer role", () => {
    const expected = "Alice";

    const engineer = new Engineer(data);
    const actual = engineer.githubUsername();
    expect(actual).toEqual(expected);
  });
});
