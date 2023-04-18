var mqtt = require('mqtt')
var fs = require('fs')
var topic = "testtopic";

var broker = 'mqtt://test.mosquitto.org'
var client = mqtt.connect(broker)
var forecast = fs.readFileSync('../printjson.json').toString();
var forecast1 = fs.readFileSync('../forecast.json').toString();
var options = {
    retain: true,
    qos: 1
};
client.publish('mydevice/forecast', forecast, options)
client.publish('mydevice/forecast', forecast1, options)
console.log("Received");
client.on('connect', function() {
    //client.on('connect', function() {
    //setInterval(function() { client.publish('mydevice/forecast', 'forecast'); }, 3000);
    //});
    //var timer_id = setInterval(function() { publish(topic, message, options); }, 5000);
    client.subscribe('topic1/test', function() {
        console.log("Received");
        client.on('message', function(topic, message, packet) {
            console.log("Received '" + message + "' on '" + topic + "'");
        });
    });
});


//client.end();
//var result = fs.writeFileSync('../forecast.json').toString();
//console.log(packet.payload.toString());