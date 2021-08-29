//TASK1 - Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

titleCase("I'm a little tea pot");

//TASK2 - Slice and Splice
//You are given two arrays and an index.Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.Return the resulting array.
// The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {

    let arr3 = arr2.slice();
    arr3.splice(n, 0, ...arr1);

    return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//TASK3 - Falsy Bouncer
//Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);

//TASK4 - Where do I Belong
//Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
    return arr.filter(placeNum => num > placeNum).length;
}

getIndexToIns([40, 60], 50);

//TASK5 - Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {

    let lwrCaseArr1 = arr[1].toLowerCase();
    let newArr = arr[0].toLowerCase();

    for (let i = 0; i < lwrCaseArr1.length; i++) {
        if (newArr.indexOf(lwrCaseArr1[i]) < 0)
            return false;
    }
    return true;
}

mutation(["hello", "hey"]);

//TASK6 - Chunky Monkey
// Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i += size) {
        arr2.push(arr.slice(i, i + size));
    }
    return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);