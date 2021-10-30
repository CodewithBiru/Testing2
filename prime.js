// write a program to check and print if a number is prime or not.  
// node Prime.js
var num1 = 7 ;

if (num1==1){
    console.log("this is neither prime nor composite")
}else if(num1<1){
    console.log("this is a negetive no.")
}else{
    for(var i = 2 ; i<num1; i++ ){
        
        if (num1 % i == 0){
            console.log("this is not a prime no")
            break;
        }else{
            console.log("this is a prime no");
            break;
        }
        
    }

}