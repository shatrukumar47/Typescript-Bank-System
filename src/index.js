
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accoundHolder = accountHolder;
        this.balance = balance;
        this.transaction = [];
    }
    BankAccount.prototype.deposit = function (amount) {
        var trans = {
            type: "deposit",
            amount: amount,
            timestamp: Date(),
        };
        this.transaction.push(trans);
        return (this.balance = this.balance + amount);
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance <= 0) {
            return "Available balance is zero";
        }
        else if (amount > this.balance) {
            return "Insufficient Balance";
        }
        else {
            var trans = {
                type: "withdraw",
                amount: amount,
                timestamp: Date(),
            };
            this.transaction.push(trans);
            return (this.balance = this.balance - amount);
        }
    };
    BankAccount.prototype.getBalance = function () {
        console.log(this.balance);
        return this.balance;
    };
    return BankAccount;
}());
//creating account
var user1 = new BankAccount("1234567890", "Shatrughan", 100000);
//check balance
user1.getBalance();
//withdraw
console.log(user1.withdraw(500));
console.log(user1.transaction);
//deposit
console.log(user1.deposit(100000));
console.log(user1.transaction);
//withdraw
console.log(user1.withdraw(500000));
console.log(user1.transaction);
