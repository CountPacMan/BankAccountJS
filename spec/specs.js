describe('BankAccount', function() {
  describe('deposit()', function() {
    it("deposits $10 to the account", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(10);
      expect(testAccount.balance).to.equal(10);
    });
  });
});
