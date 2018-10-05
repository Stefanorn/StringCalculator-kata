const add = require("./calculator");

it("Should return 0", () => {
	expect(add("")).toBe(0);
});
