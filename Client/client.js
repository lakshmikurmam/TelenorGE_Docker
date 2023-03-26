var mqtt = require('mqtt')
var broker = [];
for (let index = 0; index < 1000; index++) {
    broker[index] = 'mqtt://test.mosquitto.org';
}
var client = mqtt.connect(broker);
var topic_s = "topic";
var topic_list = ["topic2", "topic3", "topic4"];
var topic_o = { "topic22": 0, "topic33": 1, "topic44": 1 };
//Set time
setInterval(function() {
    for (let index = 0; index < 1000; index++) {
        var payload = JSON.stringify({
            id: index,
            timestamp: Date.now()
        });
        broker[index].publish("drivers", payload, { qos: 2 }, function(err) {
            if (err) {
                console.log("There is an error in publishing ", err);
            }
        });
    }
}, 2000)
client.subscribe(topic_s, { qos: 1 });
client.subscribe(topic_list, { qos: 1 });
client.subscribe(topic_o);

client.subscribe('mydevice/forecast');
client.handleMessage = function(packet, done) {
    console.log(packet.payload.toString());

    //handle incoming messages
    client.on('message', function(topic, message, packet) {
        console.log("message is " + message);
        console.log("topic is " + topic);
    });

    done();
}