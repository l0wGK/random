# What is this?

> Randomly provides the quickest and easiest random generated results.

This package is random and generates random results quickly.🎲

# Installation

`npm install randomly --save`

# Usage

```
const randomly = require('randomly');

// Generate a random integer
randomly.int(maximum, minimum) // returns an integer between [ maximum, minimum ]

// Generate a random float
randomly.float(maximum, minimum) // returns a float between [ maximum, minimum ]

// Generate boolean
randomly.boolean() // returns [ true, false ]

// Higher lower
randomly.chance(percentage) // returns [ true, false ] (Returns true if below or equals to percentage)
```

### int

Usage: `randomly.int(maximum, minimum)`
Returns an integer between maximum and minimum.

* `maximum` integer (optional, default: `1`)
* `minimum` integer (optional, default: `0`)

## float

Usage: `randomly.float(maximum, minimum)`
Returns a float between maximum and minimum.

* `maximum` float (optional, default: `1`)
* `minimum` float (optional, default: `0`)

## boolean

Usage: `randomly.boolean()`
Returns true or false.

## chance

Usage: `randomly.chace(percentage)`
Returns true or false.

* `percentage` integer (optional, default: `50`)