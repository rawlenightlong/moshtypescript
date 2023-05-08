class SeatAssignment {
    // A1, A2...
    // Mosh, John...
    // A1: string;
    // A2: string;
    // Index signature property
    [seatNumber: string]: string
}

let seats = new SeatAssignment();
seats.A1 = "Mosh"
// seats[A1] = "mosh"
seats.A2 = "John"