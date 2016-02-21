var counter = require('./counter');

counter.tick();
counter.tick();
counter.tick();

console.log('1. Total ticks: ' + counter.totalTicks());

var anotherModuleUsingCounter = require('./anotherModuleUsingCounter');

console.log('2. Total ticks: ' + counter.totalTicks());