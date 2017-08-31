// Built-in Matchers, from Chapter 2
// toEqual compares values
// toEqual will be true if both value is equal, even if they are different references

describe("Matchers - Built-in", function() {

  describe("toEqual", function() {
    it("should pass equal numbers", function(){
      expect(1).toEqual(1);
    });

    it("should pass equal strings", function() {
      expect("testing").toEqual("testing");
    });

    it("should pass equal booleans", function() {
      expect(true).toEqual(true);
    });

    it("should pass equal objects", function() {
      expect({a: "testing"}).toEqual({a: "testing"});
    });

    it("should pass equal arrays", function() {
      expect([1,2,3]).toEqual([1,2,3]);
    });
  });

  // toBe is equivalent to a 'strict equality comparison' (===)
  // toBe is true if both things are references of the same value
  // toBe will be false if both things are different references to the same thing...

  describe("toBe", function() {
    it("should pass same arrays", function() {
      var array = [1,2,3];
      expect(array).toBe(array);
    });

    it("should not pass same objects", function() {
      expect({a: "testing"}).not.toBe({a: "testing"}); // passes
    });
  });

  // toBeDefined checks if a variable is defined, value unimportant

  describe("toBeDefined", function() {
    it("should pass any value other than undefined", function(){
      expect(null).toBeDefined(); // passes
    });
  });

  // toContain checks if an array contains an element, or if a string can be found in a string

  describe("toContain", function() {
    it("should pass if a string contains another string", function() {
      expect("My big string").toContain("big");
    });

    it("should pass if an array contains an element", function() {
      expect([1,2,3]).toContain(2);
    });
  });

  // toMatch tests a value against the stated regular expression (regex)

  describe("toMatch", function() {
    it("should pass a matching string", function() {
      expect("My big matched string").toMatch(/My(.+)string/);
    });
  });

  // toThrow checks a function to see if it throws an exception

  describe("toThrow", function() {
    it("should pass when the exception is thrown", function() {
      expect(function() {
        throw("Some exception");
      }).toThrow("Some exception");
    });
  });
});