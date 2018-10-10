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
it("Should return 9", () => {
	expect(add("3,3,3")).toBe(9);
});

it("Should return 9", () => {
	expect(add("1,1,1,1,1,1,1,1,1")).toBe(9);
});

it("Should return 8", () => {
	expect(add("1,1\n1,1\n1,1\n1,1")).toBe(8);
});

it("Should throw an error with Error code 'Negatives not allowed: -1'", () => {
	function tryAdd (){
		add("-1,2");
	}
	expect(tryAdd).toThrowError("Negatives not allowed: -1");
});

it("Should throw an error with Error code 'Negatives not allowed: -2, -3'", () => {
	function tryAdd (){
		add("-2,2,-3");
	}
	expect(tryAdd).toThrowError("Negatives not allowed: -2, -3");
});

it("Should throw an error with Error code 'Negatives not allowed: -2, -3, -43, -2'", () => {
	function tryAdd (){
		add("-2,2\n-3,-43,3\n2,-2");
	}
	expect(tryAdd).toThrowError("Negatives not allowed: -2, -3, -43, -2");
});
 it("Should throw an error with Error code 'Negatives not allowed: -1, -1", () => {
	function tryAdd (){
		add("1\n-1\n-1");
	}
	expect(tryAdd).toThrowError("Negatives not allowed: -1, -1");
});
it("Should return 5", () => {
	expect(add("5,1000")).toBe(5);
});
it("Should return 5", () => {
	expect(add("5\n1000")).toBe(5);
});
it("Should return 5", () => {
	expect(add("999,5\n1000")).toBe(1004);
});

it("Should throw an error with Error code 'Negatives not allowed: -1, -1000", () => {
	function tryAdd (){
		add("1\n-1\n-1000");
	}
	expect(tryAdd).toThrowError("Negatives not allowed: -1, -1000");
});

