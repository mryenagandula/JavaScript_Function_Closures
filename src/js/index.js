/** Example 01 starting */
function counterExample1(){
   /** Am declaring outerscope variable as inner scope by creating inside of method */
   let count = 0 ;

   /** Creating inner function to update the couter variable */
   function increment(){
     count= count + 1;
     return count;
   }

   return increment;
}

const count1 = counterExample1();
count1();
count1();
count1();
count1();
console.log(count1())

/** Example 01 Ending */

/** Example 02 starting */
function counterExample2(){
    /** Am declaring outerscope variable as inner scope by creating inside of method */
    let count = 0 ;
 
    /** Creating inner function to update the couter variable */
    function increment(){
        count +=1;
        return count;
    }

    /** Creating inner function to update the couter variable */
    function decrement(){
        count -=1;
        return count;
    }
 
    return {
        increment,
        decrement,
        count: ()=> count
    };
 }
 
 const count2 = counterExample2();
 count2.increment();
 count2.increment();
 count2.increment();
 count2.increment();
 console.log(count2.increment())
 console.log(count2.decrement())
 console.log(count2.count()) 
 
 /** Example 02 Ending */

