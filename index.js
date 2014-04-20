/**
 * jQbrick - arrayRemove()
 *
 * remove an element from an array by value
 * (does not support objects)
 * 
 * arrayRemove([1,2,3], 1)
 * 
 */

'use strict';

module.exports = function(arr) {
    
    Array.prototype.slice.call(arguments, 1).forEach(function(itemToRemove) {
        arr = arr.filter(function(itemToCheck) {
            if (itemToRemove != itemToCheck) {
                return true;
            } else {
                return false;
            }
        });
    });
    
    return arr;
};

/**
 * Remove element at specific position
 */
module.exports.at = function(arr, idx) {
    arr.splice(idx, 1);
    return arr;
};


/**
 * Remove an object from an array of objects or array.
 * It check a deep equality of input data by tringify them.
 *
 * !!! this is not a performant solution and needs further refactoring !!!
 */
module.exports.deep = function(arr) {
    
    Array.prototype.slice.call(arguments, 1).forEach(function(itemToRemove) {
        arr = arr.filter(function(itemToCheck) {
            if (JSON.stringify(itemToRemove) != JSON.stringify(itemToCheck)) {
                return true;
            } else {
                return false;
            }
        });
    });
    
    return arr;

};
