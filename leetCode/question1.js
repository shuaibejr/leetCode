**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        //returning the hello world
        return "Hello World";
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */