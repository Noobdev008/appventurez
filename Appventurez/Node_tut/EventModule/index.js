// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events

const { ok } = require('assert');
const EventEmmiter = require('events')

const event = new EventEmmiter();

event.on('sayMyName',(sc,msg)=>{
    console.log(`your name is shubham and status code is ${sc} and page is ${msg}`);
})
// we can access multiple events also 
event.on('sayMyName',(sc,msg)=>{
    console.log(`your name is shubham and status code is ${sc} and page is ${msg}`);
})
event.emit('sayMyName',200,"ok");
