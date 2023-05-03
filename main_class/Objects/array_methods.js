// some
// tests if at least one element in an array passes a given/defined test. returns a boolean.
const word = ['apple','banana','strawberry','cherry','pineapple','avocado','orange'];
const a = word.some(function(word) {
    return word.length === 5;
  });
console.log(a);
//true

// every
// tests if every element in an array passes a given/defined test. returns a boolean
const words = ['apple','banana','strawberry','cherry','pineapple','avocado','orange'];
const b = words.every(function(word) {
    return word.length === 5;
  });
console.log(b);
//false

// sort
// sorts the elements in an array in an alphabetical or numerical order. returns the sorted array
const fruit = ['apple','banana','strawberry','cherry','pineapple','avocado','orange'];
fruit.sort();
console.log(fruit)

//['apple', 'avocado', 'banana', 'cherry', 'orange', 'pineapple', 'strawberry'] 