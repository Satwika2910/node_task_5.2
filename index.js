let [,,...args] = process.argv;
let [,...arr] = args;
arr = arr.map(Number);
function calculator(){
    Validity();
    let op = args[0]
    switch(op){
        case 'addition':
            addition();
            break;
        case 'subtraction':
            subtraction();
            break;
        case 'multiply':
            multiplication();
            break;
        case 'division':
            division();
            break;
        default:
            console.log('Invalid operation');
    }
}

function Validity(){
    if(arr.length > 0){
        for(let i=0;i<arr.length;i++){
            if(isNaN(arr[i])){
                console.error('Enter valid input');
                return;
            }
        }
    }else{
        console.error('Enter minimum of two values');
        return;
    }
}

function addition(){
    let sum = arr.reduce((a,b) => (a+b));
    console.log(sum);
}

function multiplication(){
    let product = arr.reduce((a,b) => (a*b));
    console.log(product); 
}

function subtraction(){
    if(arr.length!=2){
        console.error('Enter two numbers');
    }else{
        let difference = arr.reduce((a,b) => (a-b));
        console.log(difference);
    }
}

function division(){
    if(arr.length!=2){
        console.error('Enter two numbers');
    }else{
        let quotient = arr.reduce((a,b) => (a/b));
        console.log(quotient);
    }
}
calculator();