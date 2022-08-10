const arrayPrimeNumber = []
while(true) {
    var inputNum = Number(prompt("Enter a positive interger"))
    if (!isInt(inputNum)) 
        continue;
    if (inputNum < 0)
        continue;
    showPrimes(inputNum);
    alert('For n = ' + inputNum + ' prime number are ' + arrayPrimeNumber)
    break;
}
//check int
function isInt(n) {
    return n % 1 == 0;
}
//check prime number
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        arrayPrimeNumber.push(i)  //to put primes number in array
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true
}




