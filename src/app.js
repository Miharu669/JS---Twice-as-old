export function twiceAsOld(parentAge, childAge) {
    const doubleChildAge = childAge * 2;
    return Math.abs(parentAge - doubleChildAge);
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));
console.log(twiceAsOld(22, 1));
console.log(twiceAsOld(29, 0));