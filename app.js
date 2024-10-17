
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
let euro = dollar/oneEuroIs.USD
let yen = euro*oneEuroIs.JPY
return yen

}

function fromEuroToDollar(euros) {
return euros*oneEuroIs.USD

}

function fromYenToPound(yenes) {

let euro = yenes/oneEuroIs.JPY
let pound = euro*oneEuroIs.GBP
return pound

}

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1))

console.log(fromDollarToYen(3.5));
console.log(fromEuroToDollar(3.5));
console.log(fromYenToPound(3.5))

module.exports={fromEuroToDollar, fromDollarToYen, fromYenToPound}

