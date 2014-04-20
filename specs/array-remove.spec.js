
var arrayRemove = require('../index');

describe('jqb-array-remove', function() {
    
    it('should remove a string', function() {
        expect(
            arrayRemove(['a','b','c'], 'b')
        ).to.deep.equal(['a','c']);
    });
    
    it('should remove an integer', function() {
        expect(
            arrayRemove([1,2,3], 3)
        ).to.deep.equal([1,2]);
    });
    
});

describe('jqb-array-remove.at', function() {
    
    it('should remove a tring', function() {
        expect(
            arrayRemove.at(['a','b','c'], 1)
        ).to.deep.equal(['a','c']);
    });
    
});

describe('jqb-array-remove.deep', function() {
    
    it('should remove an object', function() {
        expect(
            arrayRemove.deep([{a:1},{b:2},{c:3}], {b:2})
        ).to.deep.equal([{a:1},{c:3}]);
    });
    
    it('should remove an array', function() {
        expect(
            arrayRemove.deep([[1,2,3],['a','b','c']], [1,2,3])
        ).to.deep.equal([['a','b','c']]);
    });
    
});