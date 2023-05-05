// creating objects with classes - blueprints for making objects

class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
        // this.id = id
        // this.owner = owner
        // this._balance = balance
    }

    deposit(amount: number): void {
        if (amount <= 0){
            throw new Error("Invalid Amount")
        }
        // record a transaction
        this._balance+= amount
    }


    get balance(): number {
        return this._balance
    }

    // set balance(value: number) {
    //     if (value < 0)
    //         throw new Error("Invalid Balance")
    //     this._balance = value
    // }
}

let account = new Account(4, "Rawle", 5000)

account.deposit(100)
console.log(account.balance)
