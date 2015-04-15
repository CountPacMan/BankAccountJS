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
    if (newAccount.balance <= 0) {
      $("#withdraw-account").hide();
    }

    $("#deposit-account").submit(function(event) {
      event.preventDefault();
      var deposit = parseFloat($("#deposit").val());
      newAccount.deposit(deposit);
      $("input#deposit").val("");
      $("#balance").text(newAccount.balance.toFixed(2));
      if (newAccount.balance <= 0) {
        $("#withdraw-account").hide();
      } else {
        $("#user-balance").removeClass("text-danger");
        $("#penalty").hide();
        $("#withdraw-account").show();
      }
    });

    $("#withdraw-account").submit(function(event) {
      event.preventDefault();
      var withdraw = parseFloat($("#withdraw").val());
      newAccount.withdraw(withdraw);
      $("input#withdraw").val("");
      if (newAccount.balance < 0) {
        newAccount.withdraw(35);
        $("#user-balance").addClass("text-danger");
        $("#penalty").show();
        $("#withdraw-account").hide();
      }
      $("#balance").text(newAccount.balance.toFixed(2));
    });
  });
});
