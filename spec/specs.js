describe('BankAccount', function() {
  describe('deposit()', function() {
    it("deposits $10 to the account", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(10);
      expect(testAccount.balance).to.equal(10);
    });
  });

  describe('withdraw()', function() {
    it("withdraws $10 from the account", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.balance = 20;
      testAccount.withdraw(10);
      expect(testAccount.balance).to.equal(10);
    });
  });
});
