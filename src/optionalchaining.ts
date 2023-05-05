type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null: {birthday: new Date()}
}

let customer = getCustomer(1)
console.log(customer?.birthday?.getFullYear())
// optional property access operator

// Optional element access operator
// customers?.[0]

// Optional Call
let log: any = null 
log?.("a")

