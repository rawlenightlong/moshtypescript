let speed: number | null = null
let ride = {
    // Falsy - undefeined, null, '', false, 0
    // Nullish coalescing operator
    // If speed is not null or undefined, use that value, otherwise use 30
    speed: speed ?? 30
}