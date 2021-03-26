 let num1 = 7;
 let num2 = 123;
 let difference = num2 -num1;

 //loop through the numbers.
 for (let i = 1;i <= difference;i++){
     //conditionals

     if(i % 3 === 0 && i % 5 === 0){
         console.log("Software Developer");
     }
     else if (i % 3 === 0){
         console.log("Software");
     }
     else if(i % 5 === 0){
         console.log("Developer");
     }
     else{
         console.log('none');
     }
 }