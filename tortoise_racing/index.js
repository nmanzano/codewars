// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
//
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
//
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
//
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (don't worry for fractions of second).
//
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin.
//
// Examples
// race(720, 850, 70) => [0, 32, 18]
// race(80, 91, 37)   => [3, 21, 49]

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?



function race(v1, v2, g) {
    let A = v1
    let B = v2
    let lead = g

    let abDiff = v2 - v1
    let answer = g % abDiff
    console.log((answer * v2) / 60);
}


race(720, 850, 70) //[0, 32, 18]
// race(35, 55, 3) //[0, 32, 18]
// race(3, 5, 36) //[0, 32, 18]
