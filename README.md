# What is this?

> FastRand provides the quickest and easiest random generated results.

This package is random and generates random results quickly.🎲

# Installation

`npm install fastrand --save`

# Usage

```
const fastrand = require('fastrand');

// Generate a random integer
fastrand.int(maximum, minimum) // returns an integer between [ maximum, minimum ]

// Generate a random float
fastrand.float(maximum, minimum) // returns a float between [ maximum, minimum ]

// Generate boolean
fastrand.boolean() // returns [ true, false ]

// Higher lower
fastrand.chance(percentage) // returns [ true, false ] (Returns true if below or equals to percentage)
```

#### int

Usage: `fastrand.int(maximum, minimum)`
Returns an integer between maximum and minimum.

* `maximum` integer (optional, default: `1`)
* `minimum` integer (optional, default: `0`)

#### float

Usage: `fastrand.float(maximum, minimum)`
Returns a float between maximum and minimum.

* `maximum` float (optional, default: `1`)
* `minimum` float (optional, default: `0`)

#### boolean

Usage: `fastrand.boolean()`
Returns true or false.

#### chance

Usage: `fastrand.chace(percentage)`
Returns true or false.

* `percentage` integer (optional, default: `50`)