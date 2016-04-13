import { Meteor } from 'meteor/meteor';
var Fiber = Npm.require('fibers');

console.log(Fiber);

function sleep(ms) {
    var fiber = Fiber.current;
    setTimeout(function() {
        fiber.run();
    }, ms);
    Fiber.yield();
}

Meteor.methods({
    getDetailsUser: function(key,user){
     sleep(1000);
      return 'result from server';
    }
});
