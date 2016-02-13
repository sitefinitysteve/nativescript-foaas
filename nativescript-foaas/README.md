# NativeScript (FOAAS)
Nativescript wrapper for FOAAS.  You can now FO with Promises!

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

//Simple
foaas.coolstorybro("nativescript").then(function(args){
    alert(args.combined);
});

//Nested Chain
foaas.coolstorybro("nativescript").then(function(args){
    //Alert Message
    alert(args.message).then(function(){
        //Call the next once it's closed
        foaas.bye("nativescript").then(function(args){
            alert(args.combined); 
        });        
    });
});
```

## Notes
Left out a few of the very offensive ones...