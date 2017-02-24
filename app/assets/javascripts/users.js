/* global $, Stripe */
// 1 Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
    
  // 2 Set Stripe public key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') )
  
  // 3 When user clicks form submit btn,
  submitBtn.click(function(event){
    // prevent default submission behavior.
    event.preventDefault();
    
  // 4 Collect the credit card fields.
  var ccNum = $('#card_number').val(),
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
      
      
  // 5 Send card info to Stripe.
  Stripe.createToken({
    number: ccNum,
    cvc: cvcNum,
    exp_month: expMonth,
    exp_year: expYear
  }, stripeResponseHandler);
  
  });

  // 6 Stripe will return a card token.
  
  
  // 7 Inject card token as hidden field into form.
  
  
  // 8 Submit form to our Rails app.
  
  

});