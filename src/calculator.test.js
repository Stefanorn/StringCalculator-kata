const add = require("./calculator");

it("Should return 0", () => {
	expect(add("")).toBe(0);
});

it("Should return 5", () => {
	expect(add("5")).toBe(5);
});

it("Should return 6", () => {
	expect(add("3,3")).toBe(6);
});
