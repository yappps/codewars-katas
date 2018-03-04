var findMultiples = require("../src/multiples");

describe("Multiples", () => {
  it("should behave...", () => {
    expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25]);
  });

  it("should behave...", () => {
    expect(findMultiples(1, 2)).toEqual([1, 2]);
  });

  it("should behave...", () => {
    expect(findMultiples(5, 7)).toEqual([5]);
  });

  it("should behave...", () => {
    expect(findMultiples(4, 27)).toEqual([4, 8, 12, 16, 20, 24]);
  });

  it("should behave...", () => {
    expect(findMultiples(11, 54)).toEqual([11, 22, 33, 44]);
  });
});
