require("../index.js");
const { expect, test } = require("@jest/globals");

test("console.frog is defined", () => {
  expect(console.frog).toBeDefined();
});

const inputs = [
  ["test input", "test input"],
  ["ribbit!", "ribbit!"],
];

test.each(inputs)(
  "console.frog(%s) the string",
  (input, expected) => {
    const log = jest.spyOn(console, "log").mockImplementation();

    console.frog(input);

    expect(log).toBeCalledWith(expect.stringContaining(expected));
  }
);

it("prints the correct number of - characters", () => {
  const log = jest.spyOn(console, "log").mockImplementation();

  console.frog("Hello, World!");

  const border = "-".repeat("Hello, World!".length + 4);
  expect(log).toBeCalledWith(expect.stringContaining(border));
});
