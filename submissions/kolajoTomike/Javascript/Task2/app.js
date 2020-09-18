//Task 2//

 const diff=  123-7;
 var count=1;

 while (count <= diff){
   switch(true){

    case((count % 3 === 0) && (count % 5 ===0)):
    console.log("Software Developer");
    break;
     case((count % 3) === 0):
     console.log("Software");
     break;

     case((count % 5) ===0):
     console.log("Developer");
     default:
       console.log(count);
   }
   count++
   }