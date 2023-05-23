let numbers = [1,2,3,4,5];

const sum = reduce(numbers);

function reduce(arr) {
    let cache = 0;

    for(let i = 0; i < arr.length; i++) {
        cache = cache + arr[i];
    }
    return cache;
}

console.log(sum);