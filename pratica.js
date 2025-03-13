function getMultiplier(multiplier){
    return function (aNumber){
        return aNumber * multiplier
    }
}

const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

console.log(double(3))