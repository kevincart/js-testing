// Built-in Matchers, from Chapter 2
// toEqual compares values
// toEqual will be true if both value is equal, even if they are different references
describe("Matchers, toEqual", function() {
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

describe("Matchers, toBe", function() {
  it("should pass same arrays", function() {
    var array = [1,2,3];
    expect(array).toBe(array);
  });
  
  it("should not pass same objects", function() {
    expect({a: "testing"}).not.toBe({a: "testing"});
  });
});