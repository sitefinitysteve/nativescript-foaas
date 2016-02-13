var viewModel = require("./main-view-model");
var foaas = require("nativescript-foaas");


exports.pageLoaded = function(args) {
    
}


exports.onHello = function(args){
    foaas.coolstorybro("nativescript").then(function(args){
        alert(args.message).then(function(){
            foaas.bye("nativescript").then(function(args){
            alert(args.combined); 
            });        
        });
    });
}


