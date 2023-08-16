var events = require('events');
var em = new events.EventEmitter(); 

var switchOnFunction_1 = function (data) {
     console.log("Switch on event 1 called ", data);
}

var switchOnFunction_2 = function (data) {
     console.log("swithch on event 2 called ", data);
}

var switchOffFunction_1 = function (data) {
     console.log("swithch off event 1 called ", data);
}

var listners = [switchOnFunction_1, switchOnFunction_2]
// em.addListener('switchOnEvent',switchOnFunction_1);
// em.addListener('switchOnEvent',switchOnFunction_2);
listners.forEach((data) => {
     em.addListener('switchOnEvent', data);
})
em.addListener('switchOffEvent', switchOffFunction_1);
em.emit('switchOnEvent', 'Fan');
em.emit('switchOffEvent', 'Fan');

em.removeListener('switchOnEvent',switchOnFunction_1);
em.emit('switchOnEvent', 'Fan');
em.emit('switchOffEvent', 'Fan');