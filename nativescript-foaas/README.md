# NativeScript FuckOff-As-As-Service (FOAAS)
Nativescript wrapper for [FOAAS](http://www.foaas.com/).  You can now FO with Promises!

## Methods
* off(name, from);
* you(name, from);
* this(from);
* that(from);
* everything(from);
* everyone(from);
* donut(name, from);
* shakespeare(name, from);
* linus(name, from);
* king(name, from);
* pink(from);
* life(from);
* outside(name, from);
* thing(thing, from);
* thanks(from);
* flying(from);
* fascinating(from);
* madison(name, from);
* cool(from); *alias coolstorybro*
* field(name, from, reference);
* nugget(name, from);
* yoda(name, from);
* ballmer(name, company, from);
* what(from);
* because(from);
* caniuse(tool, from);
* bye(from);
* bus(name, from);
* bday(name, from);
* awesome(from);
* tucker(from); *alias comein*
* bucket(from);
* family(from);
* shutup(name, from);
* keepcalm(reaction, from);
* dosomething(blank, theThing, from);

## Usage
All methods return Promises
``` js
var foaas = require("nativescript-foaas");
//Promise return
/*args: {
    message: "Cool story, bro.",
    subtitle: "- nativescript",
    combined: "Cool story, bro. - nativescript"   
}
*/
foaas.coolstorybro("nativescript").then(function(args){
    alert(args.message).then(function(){
        foaas.bye("nativescript").then(function(args){
            alert(args.combined); 
        });        
    });
});

//Result:
// Popup alert says "Cool story, bro.", close it
// Another popup then shows "Fuckity bye - nativescript"
```

## Notes
Left out a few of the very offensive ones...