// a.
let x = 6;
let y = 60;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let quo = x / y;

console.log(sum + "\n" + diff + "\n" + prod + "\n" + quo);

// b 
if (x>y){
    console.log(y + " is greater than: " + x);
}else if(x<y){
    comsole.log(x + " is greater than: " +y);    
}

// c.
switch (sum){
    case 66:
        console.log("2000");
        break;
    case 54:
        console.log("2001");
        break;
    case 360:
        console.log("2002");
        break;
    case 0.1:
        console.log("2003");
        break;
    default:
        console.log("Invalid!!!");                    
}

//d
for(let i = 0; i <= sum; i++){
    console.log(i);
}

// e.
if (sum % 2 == 0){
    console.log(sum + " is even.");
}else{
    console.log(sum + "is odd.");    
}

function isPrime(num){
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for(let i = 3; i <= Math.sqrt(num); i+= 2) {
        if (num % i === 0) return false;
    }

    return true;
}

function isPalindrome(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //Clean String
    const reversedStr = cleanedStr.split('').reversed().join('');
    return cleanedStr === reversedStr;
}

const number = 17 ;
const text = 'Racing';
