var mqtt = require('mqtt')
const crypto = require("crypto");
//var broker = 'mqtt:/ / test.mosquitto.org ';
var broker = '10.246.0.10';
var client = mqtt.connect(broker);
var clientid = '963f3d5972dc4962aff21937eebd6a60';
var secretid = 'P8NgWG6GohFZHxx77nzAOON7nNIyCVuq';
//var topic_s = "topic";
//var topic_list = ["topic2", "topic3", "topic4"];
//var topic_o = { "topic22": 0, "topic33": 1, "topic44": 1 };
//client.subscribe(topic_s, { qos: 1 });
//client.subscribe(topic_list, { qos: 1 });
//client.subscribe(topic_o);
//client.subscribe('topic123/test', function() {});

//client.subscribe('mydevice/forecast');
//client.handleMessage = function(packet, done) {
// console.log(packet.payload.toString());

//handle incoming messages
client.on('message', function(topic, message, packet) {
    console.log("message is " + message);
    console.log("topic is " + topic);
});
setInterval(function() {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let rand = Math.random() * 100;
    let sec = (Math.floor(ts / 1000));
    const id = crypto.randomBytes(16).toString("hex");
    client.publish('topic1/test', String(rand), function() {

        console.log("Pushed: ", year + "-" + month + "-" + date + ":" + sec, "log generated MQ messages publishing :" + rand + ":", "seqid:" + id);

    });


}, 4000);