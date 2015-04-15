var BankAccount = {
  balance: 0,

  deposit: function(amount) {
    this.balance += amount;
  }
};


jQuery(document).ready(function() {
  $("#").focus();
  $("#t").submit(function(event) {

    $("#result").show();
    event.preventDefault();
  });
});
