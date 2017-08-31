// Initialize new Investment view module with IIFE (Immediately Invoked Function Expression)
// Advantage of IIFE is it helps avoid use of global declarations, everything is local 
(function ($, Investment, Stock) {
  function NewInvestmentView (params) {
    this.$el = $(params.selector);
  };
  
  this.NewInvestmentView = NewInvestmentView;
}) (jQuery, Investment, Stock);