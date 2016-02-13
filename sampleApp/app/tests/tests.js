var foaas = require("nativescript-foaas");

describe('FOAAS Functions', function () {
    //off
    it("should return Fuck off, :name. - :from", function (done) {
        foaas.off("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === 'Fuck off, steve.' &&
                          args.subtitle === '- nativescript');
            done(); 
        });
    });
    
    
    //you
    it("should return Fuck you, :name. - :from", function (done) {
        foaas.you("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck you, steve." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });
    
    //this
    it("should return Fuck this. - :from", function (done) {
        foaas.this("nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck this." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });
    
    //that
    it("should return Fuck that. - :from", function (done) {
        foaas.that("nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck that." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });
    
    //everything
    it("should return Fuck everything. - :from", function (done) {
        foaas.everything("nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck everything." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });
    
    //everyone
    it("should return Everyone can go and fuck off. - :from", function (done) {
        foaas.everyone("nativescript").then(function(args){
            assert.isTrue(args.message === "Everyone can go and fuck off." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });    
    
    //donut
    it("should return :name, go and take a flying fuck at a rolling donut. - :from", function (done) {
        foaas.donut("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "steve, go and take a flying fuck at a rolling donut." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });    
    
    //shakespeare
    it("should return :name, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch! - :from", function (done) {
        foaas.shakespeare("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "steve, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!" && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //linus
    it("should return :name, there arent enough swear-words in the English language, so now Ill have to call you perkeleen vittupää just to express my disgust and frustration with this crap. - :from", function (done) {
        foaas.linus("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "steve, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //king
    it("should return Oh fuck off, just really fuck off you total dickface. Christ :name, you are fucking thick. - :from", function (done) {
        foaas.king("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "Oh fuck off, just really fuck off you total dickface. Christ steve, you are fucking thick." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //pink
    it("should return Well, Fuck me pink. - :from", function (done) {
        foaas.pink("nativescript").then(function(args){
            assert.isTrue(args.message === "Well, Fuck me pink." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });    
    
    //life
    it("should return Fuck my life. - :from", function (done) {
        foaas.life("nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck my life." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });    
    
    //outside
    it("should return ':name, why don't you go outside and play hide-and-go-fuck-yourself? - :from", function (done) {
        foaas.outside("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "steve, why don't you go outside and play hide-and-go-fuck-yourself?" && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //thing
    it("should return 'Fuck :thing. - :from", function (done) {
        foaas.thing("crap", "nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck crap." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //thanks
    it("should return 'Fuck you very much. - :from", function (done) {
        foaas.thanks("nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck you very much." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //flying
    it("should return I dont give a flying fuck. - :from", function (done) {
        foaas.flying("nativescript").then(function(args){
            assert.isTrue(args.message === "I don't give a flying fuck." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //fascinating
    it("should return 'Fascinating story, in what chapter do you shut the fuck up? - :from", function (done) {
        foaas.fascinating("nativescript").then(function(args){
            assert.isTrue(args.message === "Fascinating story, in what chapter do you shut the fuck up?" && 
                      args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //madison
    it("should return 'What you've just said is one of the most insanely idiotic things I have ever heard, :name. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points :name, and may God have mercy on your soul. - :from", function (done) {
        foaas.madison("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "What you've just said is one of the most insanely idiotic things I have ever heard, steve. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points steve, and may God have mercy on your soul." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });    
    
    //cool
    it("should return Cool story, bro. - :from", function (done) {
        foaas.cool("nativescript").then(function(args){
            assert.isTrue(args.message === "Cool story, bro." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });    
    
    //field
    it("should return And :name said unto :from, Verily, cast thine eyes upon the field in which I grow my fucks, and :from gave witness unto the field, and saw that it was barren", function (done) {
        foaas.field("steve", "nativescript", "telerik").then(function(args){
            assert.isTrue(args.message.startsWith("And steve said unto nativescript") && 
                          args.subtitle === "- telerik");
            done();
        });
    });  
    
     //nugget
    it("should return 'Well :name, aren't you a shining example of a rancid fuck-nugget. - :from", function (done) {
        foaas.nugget("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "Well steve, aren't you a shining example of a rancid fuck-nugget." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //yoda
    it("should return 'Fuck off, you must, :name. - :from", function (done) {
        foaas.yoda("steve", "nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck off, you must, steve." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });  
        
    //ballmer
    it("should return 'Fucking :name is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill :company. - :from", function (done) {
        foaas.ballmer("steve", "telligent" ,"nativescript").then(function(args){
            assert.isTrue(args.message === "Fucking steve is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill telligent." && 
                      args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //what
    it("should return What the fuck?!. - :from", function (done) {
        foaas.what("nativescript").then(function(args){
            assert.isTrue(args.message === "What the fuck‽" && 
                          args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //because
    it("should return Why? Because Fuck you, that's why. - :from", function (done) {
        foaas.because("nativescript").then(function(args){
            assert.isTrue(args.message === "Why? Because Fuck you, that's why." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //caniuse
    it("should return Can you use :tool? Fuck no! - :from", function (done) {
        foaas.caniuse("nativescript", "nativescript").then(function(args){
            assert.isTrue(args.message === "Can you use nativescript? Fuck no!" && 
                          args.subtitle === "- nativescript");
            done();
        });
    });   
    
    //bye
    it("should return Fuckity bye! - :from", function (done) {
        foaas.bye("nativescript").then(function(args){
            assert.isTrue(args.message === "Fuckity bye!" && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //bus
    it("should return Christ on a bendy-bus, :name, don't be such a fucking faff-arse. - :from", function (done) {
        foaas.bus("steve","nativescript").then(function(args){
            assert.isTrue(args.message === "Christ on a bendy-bus, steve, don't be such a fucking faff-arse." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  
        
    //bday
    it("should return Happy Fucking Birthday, :name. - :from", function (done) {
        foaas.bday("steve","nativescript").then(function(args){
            assert.isTrue(args.message === "Happy Fucking Birthday, steve." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //awesome
    it("should return This is Fucking Awesome. - :from", function (done) {
        foaas.awesome("nativescript").then(function(args){
            assert.isTrue(args.message === "This is Fucking Awesome." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //tucker
    it("should return Come the fuck in or fuck the fuck off. - :from", function (done) {
        foaas.tucker("nativescript").then(function(args){
            assert.isTrue(args.message === "Come the fuck in or fuck the fuck off." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //bucket
    it("should return Please choke on a bucket of cocks. - :from", function (done) {
        foaas.bucket("nativescript").then(function(args){
            assert.isTrue(args.message === "Please choke on a bucket of cocks." && 
                          args.subtitle === "- nativescript");
            done();
        });
    }); 
    
    //family
    it("should return Fuck you, your whole family, your pets, and your feces. - :from", function (done) {
        foaas.family("nativescript").then(function(args){
            assert.isTrue(args.message === "Fuck you, your whole family, your pets, and your feces." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  
    
    //shutup
    it("should return :name, shut the fuck up. - :from", function (done) {
        foaas.shutup("Steve","nativescript").then(function(args){
            assert.isTrue(args.message === "Steve, shut the fuck up." && 
                          args.subtitle === "- nativescript");
            done();
        });
    });  

    //keepcalm
    it("should return Keep the fuck calm and :reaction!", function (done) {
        foaas.keepcalm("nativescript","nativescript").then(function(args){
            assert.isTrue(args.message === "Keep the fuck calm and nativescript!" && 
                          args.subtitle === "- nativescript");
            done();
        });
    });
    
    //dosomething
    it("should return :do the fucking :something! - :from", function (done) {
        foaas.dosomething("Native all", "things", "nativescript").then(function(args){
            assert.isTrue(args.message === "Native all the fucking things!" && 
                          args.subtitle === "- nativescript");
            done();
        });
    });
});