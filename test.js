//call back functions


/**
function first(){

  console.log("yo")
}

function second() {
  console.log("I am second");
}


function callBack(second){
first();
second();
}


callBack(function(){
  console.log("its done")
});


**/



var G = 'G';
// Define a function and create a closure
function functionA() {
  var A = 'A'

  // Define a function and create a closure
  function functionB() {
    var B = 'B'
    console.log(A, B, G);
  }

  functionB();  // prints A, B, G
  // functionB closure does not get discarded
  A = 42;
  functionB();  // prints 42, B, G
}
functionA();
