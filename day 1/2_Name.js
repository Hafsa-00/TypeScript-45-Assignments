"use strict";
let personname = 'HAFsa ';
let lowercase = personname.toLowerCase();
let uppercase = personname.toUpperCase();
let titlecase = personname.split('').map(word => word.charAt(0).toLowerCase()).join('');
console.log(`hello ${personname},your name in :
    lowercase:${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`);
