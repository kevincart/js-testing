describe("NewInvestmentView", function() {
  var view;
  beforeEach(function() {
    loadFixtures('NewInvestmentView.html');
    view = new NewInvestmentView({selector: '#new-investment'});
  });
  
  it("should expose a property with its DOM element", function() {
    expect(view.$el).toExist();
  });
  
  it("should allow the input of the stock symbol", function() {
    
  });
  
  it("should allow the input of shares", function() {
    
  });
  
  it("should allow the input of the share price", function() {
    
  });
});