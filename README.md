jqb-array-remove
================

Remove an array item given it's value:

    var arrayRemove = require('jqb-array-remove');
    arrayRemove([1, 2, 3], 2);             // [1, 3]
    arrayRemove(['a','b','c'], 'a', 'b');  // ['c']
    
You can pass as many values to remove from the original array, it returns filtered array.

### arrayRemove.at(arr, idx)

Remove the given index:
    
    var arrayRemoveAt = require('jqb-array-remove').at;
    arrayRemove([1, 2, 3], 2);             // [1, 2]
    arrayRemove(['a','b','c'], 0);         // ['b', 'c']
    

### arrayRemove.deep()

Remove items by value, it deelply check items so it's good for removing objects by value.  
<small>(new method, not optimised)</small>

    var arrayDeepRemove = require('jqb-array-remove').deep;
    arrayRemove.deep([{a:1},{b:2},{c:3}], {b:2}) // [{a:1},{c:3}]
    
## Run Tests

If you want to run tests on this module you can prompt:

    npm install && grunt