// 1 PrintSum();
let anyArray = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10]

const printSum = function(array) {
    let sum = 0;
    for(let i =0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
console.log(printSum(anyArray));

// 2 Alice and Bob

// Test Data
const alice = [4, 4, 6];
const bob = [4, 1, 7];
const alicePoints = [0,0, 0];
const bobPoints = [0, 0, 0];

// Comparing and awarding point
for(let i = 0; i < alice.length; i++) {
    if(alice[i]> bob[i]) {
        alicePoints[i] = 1;
    } else if(alice[i] < bob[i]){
        bobPoints[i] = 1;
    } else {
        alicePoints[i] = 0;
        bobPoints[i] =0;
    }
     
}
// Comparison points 
//  To calculate the total point we can use the printSum function in question 1;
let aliceComPoint = printSum(alicePoints);
let bobComPoint = printSum(bobPoints);

console.log(aliceComPoint);
console.log(bobComPoint);

// 3. The Ratio Problem
const sampleArray = [2, -1, 5, 6, 0, -3];

// determine the number of positive, negative and zero;
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for(let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > 0) {
        positiveCount++
    } else if (sampleArray[i] < 0) {
        negativeCount++
    } else zeroCount++
}

console.log(positiveCount,negativeCount, zeroCount);

// Calculating the ratio
const positiveRatio = positiveCount / sampleArray.length;
const negativeRatio = negativeCount / sampleArray.length;
const zeroRatio = zeroCount / sampleArray.length;

console.log(positiveRatio);
console.log(negativeRatio);
console.log(zeroRatio);

// 4. FirstFunction()
const firstFunction = function(a,b) {
    return a + b;
}
firstFunction(2, 3);
