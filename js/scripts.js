var BankAccount = {
  name: null,
  balance: 0,

  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};


jQuery(document).ready(function() {
  $("#name").focus();
  $("#create-account").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initialDeposit = parseFloat($("#initial").val());
    var newAccount = Object.create(BankAccount);
    newAccount.name = name;
    newAccount.deposit(initialDeposit);
    $("form#create-account").val("").hide();

    $("#balance").text(newAccount.balance.toFixed(2));
    $("#create-account").hide();
    $("#user-name").text("Welcome, " + newAccount.name + "!");
    $("#user-account").show();

    $("#deposit-account").submit(function(event) {
      event.preventDefault();
      var deposit = parseFloat($("#deposit").val());
      newAccount.deposit(deposit);
      $("input#deposit").val("");
      $("#balance").text(newAccount.balance.toFixed(2));
    });

    $("#withdraw-account").submit(function(event) {
      event.preventDefault();
      var withdraw = parseFloat($("#withdraw").val());
      newAccount.withdraw(withdraw);
      $("input#withdraw").val("");
      $("#balance").text(newAccount.balance.toFixed(2));
    });
  });
});
