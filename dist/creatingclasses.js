"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(4, "Rawle", 5000);
account.deposit(100);
console.log(account.balance);
