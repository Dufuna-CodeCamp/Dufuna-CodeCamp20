let a = 123;
  let b = 7;
  let c = a - b;

for (var i = 1; i <= c; i++){

    if (i % 3 == 0 && i % 5 == 0){
        console.log('Software Developer');
    
    }else if ( i % 3 == 0) {
        console.log('Software');
    
    }else if (i % 5 == 0){
        console.log('Developer');
    
    }else{
        console.log(i);
    }
    }