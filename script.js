//Increment, x is now 5
let x = 4;
   x++; 
   

   function incrementBalance(x) {
    x++;
    return x;
  }

   //Decrement,y is now 4
   let y = 5;
   y--; 
   
   function decrementBalance(x) {
    x--;
    return x;
  }

  let resultIncrement = incrementBalance(10);
console.log('Result with increment:', resultIncrement);
let resultDecrement = decrementBalance(10);
console.log('Result with decrement:', resultDecrement);
