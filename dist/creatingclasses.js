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
        this.balance = +amount;
    }
}
//# sourceMappingURL=creatingclasses.js.map