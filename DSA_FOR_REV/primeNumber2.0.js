const number = 10

const primeNumber = (n) => {
    if (n == 1 || n == 0) return false;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

const findPrime = (n) => {
    let str =""
    for(let i = 0; i < n; i++) {
        if(primeNumber(i)){
            str += i+" "
        }
    }
    console.log(str);
}
findPrime(number)