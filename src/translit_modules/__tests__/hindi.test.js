/* globals describe, it, expect */
const hindi = require("../hindi");

describe("hindi()", () => {
  it('handles "soriT mhlw 5 ]"', () => {
    expect(hindi("soriT mhlw 5 ]")).toBe("सोरठि महला ५ ||");
  });
});
