# JavaScript Function Closures 

### JavaScript Function Closures In Detail
- The main intention of function closures in javascript to avoid declaring variables outside.
  instead of declaring outside we can achieve functionality by declaring inside and get the value
  of that variable by using inner function.
- Using clousers we will convert outer scope variables into inner scope.


### Steps:
- Create function in javascript file.
- Add variable inside function and create inner function and return that function.

### Example (1)

```bash

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

```


### Example (2)

```bash

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

```