exports.receivesAFunction = function(callback) {
    callback();
  };
  
  exports.returnsANamedFunction = function() {
    return function namedFunction() {
      return "I am a named function!";
    };
  };
  
  exports.returnsAnAnonymousFunction = function() {
    return function() {
      return "I am an anonymous function!";
    };
  };
  