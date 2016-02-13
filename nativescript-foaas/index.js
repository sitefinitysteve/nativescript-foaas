//http://www.foaas.com/

var http = require("http");

var baseUrl = "https://www.foaas.com";

exports.off = function(name, from){
    return doCallback("off", [name, from]);
}

exports.you = function(name, from){
    return doCallback("you", [name, from]);
}

exports.this = function(from){
    return doCallback("this", [from]);
}

exports.that = function(from){
    return doCallback("that", [from]);
}

exports.everything = function(from){
    return doCallback("everything", [from]);
}

exports.everyone = function(from){
    return doCallback("everyone", [from]);
}

exports.donut = function(name, from){
    return doCallback("donut", [name, from]);
}

exports.shakespeare = function(name, from){
    return doCallback("shakespeare", [name, from]);
}

exports.linus = function(name, from){
    return doCallback("linus", [name, from]);
}

exports.king = function(name, from){
    return doCallback("king", [name, from]);
}

exports.pink = function(from){
    return doCallback("pink", [from]);
}

exports.life = function(from){
    return doCallback("life", [from]);
} 

exports.outside = function(name, from){
    return doCallback("outside", [name, from]);
}

exports.thing = function(thing, from){
    return doCallback("", [thing, from]);
}

exports.thanks = function(from){
    return doCallback("thanks", [from]);
}

exports.flying = function(from){
    return doCallback("flying", [from]);
}

exports.fascinating = function(from){
    return doCallback("fascinating", [from]);
}

exports.madison = function(name, from){
    return doCallback("madison", [name, from]);
}

exports.madison = function(name, from){
    return doCallback("madison", [name, from]);
}

exports.cool = function(from){
    return doCallback("cool", [from]);
}

// Alias for cool
exports.coolstorybro = function(from){
    return doCallback("cool", [from]);
}

exports.field = function(name, from, reference){
    return doCallback("field", [name, from, reference]);
}

exports.nugget = function(name, from){
    return doCallback("nugget", [name, from]);
}

exports.yoda = function(name, from){
    return doCallback("yoda", [name, from]);
}

exports.ballmer = function(name, company, from){
    return doCallback("ballmer", [name, company, from]);
}

exports.what = function(from){
    return doCallback("what", [from]);
}

exports.because = function(from){
    return doCallback("because", [from]);
}

exports.caniuse = function(tool, from){
    return doCallback("caniuse", [tool, from]);
}

exports.bye = function(from){
    return doCallback("bye", [from]);
}

exports.bus = function(name, from){
    return doCallback("bus", [name, from]);
}

exports.bday = function(name, from){
    return doCallback("bday", [name, from]);
}

exports.awesome = function(from){
    return doCallback("awesome", [from]);
}

exports.tucker = function(from){
    return doCallback("tucker", [from]);
}

//Alias of tucker
exports.comein = function(from){
    return doCallback("tucker", [from]);
}

exports.bucket = function(from){
    return doCallback("bucket", [from]);
}

exports.family = function(from){
    return doCallback("family", [from]);
}

exports.shutup = function(name, from){
    return doCallback("shutup", [name, from]);
}

exports.keepcalm = function(reaction, from){
    return doCallback("keepcalm", [reaction, from]);
}

exports.dosomething = function(blank, theThing, from){
    return doCallback("dosomething", [blank, theThing, from]);
}

function doCallback(url, params){
    return new Promise(function (resolve, reject) {
        var endpoint = (url == "") ? baseUrl : baseUrl + "/" + url;
        
        params.forEach(function(param){
           endpoint += "/" + param; 
        });
        
        console.log(endpoint);
        
        http.request({
            url: endpoint,
            method: "GET",
            headers: { "Accept": "application/json" },
            timeout: 5000
        }).then(function (response) {
            var result = response.content.toJSON();
            return resolve({
                message: result.message,
                subtitle: result.subtitle,
                combined: result.message + " " + result.subtitle
            });
        }, function (e) {
            var error = {
                message: "Unable to give a fuck",
                status: e
            };
            return reject(error);
        });
    });
}
