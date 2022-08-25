function isPrime(num:number):boolean{
    let isprime = true;
    
    if(num === 2) {
        isprime = true;
        return isprime;
    }
    
    for(let i = 2 ; i < num/2 ; i++){
        
        //completely divisible other than 1 and number itslef meaning not prime
        if(num%i===0){
            isprime = false;
            break;
        }
    }
    return isprime;
}