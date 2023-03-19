/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true
*******************************************************************************/
debugger
let one = function(arr, cb) {
    // results array
    let res = [];

    // loop through original arr
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];

        // if current element is in results array, we break the loop and return false;
        if(res.includes(el)) {
            return false;
        }

        // we loop through results arr
        for (let j = 0; j < res.length; j++) {
            let el1 = res[j];

            // we invoke callback func with current ele of the original arr and compare with every element in the results arr
            // if both element returns true, we break the loop and return false
            if (cb(el, i) === true) {
                if (cb(el1, j) === true) {
                    return false;
                }
            }
        }
        // we add current element to the results array and continue with the loop
        res.push(el);
    }

    // after adding last element to results arr we loop through results arr
    for(let k = 0; k < res.length; k++) {
        let el = res[k];

        //if at lest one element returns true we break loop and return true
        if(cb(el, k) ===  true) {
            return true;
        }

    }

    // else we return false if no element passed the condition of the callback func
    return false;

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = one;
