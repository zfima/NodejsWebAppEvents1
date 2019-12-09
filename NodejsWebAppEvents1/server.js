var fileSystem = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var readStream = fileSystem.createReadStream('./demoFile.txt');

readStream.on('open', () =>
{
    console.log('The file is open');
})

//Creating Event handler
var eventHandler1 = () =>
{
    console.log('eventHandler1');
}

var eventHandler2 = (params) => {
    console.log('eventHandler2');
    if (params != undefined) {
        console.log(params);
    }
}

//Handlers Subscribes to event name
eventEmitter.on('eh1', eventHandler1);
eventEmitter.on('eh1', eventHandler2);
eventEmitter.on('eh2', eventHandler2);

//Fire events: first one catches by 2 handlers, second by one
eventEmitter.emit('eh1');
eventEmitter.emit('eh2', 'mama');

//un-subscribe from event. catches by 1 handler
eventEmitter.off('eh1', eventHandler2);
eventEmitter.emit('eh1');