const num=9;
if(num===1){
    console.log("1 is neither prime not composite")
}else if(num===2 || num===3 || num===5 || num===7){
    console.log(num+" is a prime no.")
}else if(num%2===0 || num%3===0 || num%5===0 || num%7===0){
    console.log(num+" is not not a prime no.")
}else{
    console.log(num+"is prime")
}


// node Prime2.js