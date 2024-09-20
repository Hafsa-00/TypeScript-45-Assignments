"use strict";
function make_shirt(size = 'large', message = ' I love TypeScript.') {
    console.log(`The size of the shirt is ${size} and the message printed on shirt is ${message}.`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'pinki');
make_shirt('medium', 'tiger');
