import { transactionInterface } from "./interfaces";

class BankAccount {
  accountNumber: string;
  accoundHolder: string;
  balance: number;
  transaction: transactionInterface[];

  constructor(accountNumber: string, accountHolder: string, balance: number) {
    this.accountNumber = accountNumber;
    this.accoundHolder = accountHolder;
    this.balance = balance;
    this.transaction = [];
  }

  deposit(amount: number) {
    let trans: transactionInterface = {
      type: "deposit",
      amount: amount,
      timestamp: Date(),
    };
    this.transaction.push(trans);
    return (this.balance = this.balance + amount);
  }

  withdraw(amount: number) {
    if (this.balance <= 0) {
      return "Available balance is zero";
    } else if (amount > this.balance) {
      return "Insufficient Balance";
    } else {
      let trans: transactionInterface = {
        type: "withdraw",
        amount: amount,
        timestamp: Date(),
      };
      this.transaction.push(trans);
      return (this.balance = this.balance - amount);
    }
  }

  getBalance() {
    console.log(this.balance);
    return this.balance;
  }
}

//creating account
let user1 = new BankAccount("1234567890", "Shatrughan", 100000);

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
