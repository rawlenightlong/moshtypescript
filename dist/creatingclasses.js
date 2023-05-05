"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    depost(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this.balance += amount;
    }
}
let account = new Account(4, "Rawle", 5000);
account.depost(100);
console.log(account instanceof Account);
