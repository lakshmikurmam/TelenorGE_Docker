var fs = require('fs');
const timestamp = (new Date()).toJSON();
const crypto = require("crypto");

const id = crypto.randomBytes(16).toString("hex");

console.log(id); // => f9b327e70bbcf42494ccb28b2d98e00e

var myData = {
    mydata1: {
        id,
        signalname: 'test1',
        signalvalue: '1.0',
        timestamp,
        quality: '4'
    },
    mydata2: {
        id,
        signalname: 'test2',
        signalvalue: '2.0',
        timestamp,
        quality: '5'
    },

}


var outputFilename = '../printjson.json';

fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("JSON saved to " + outputFilename);
    }
});