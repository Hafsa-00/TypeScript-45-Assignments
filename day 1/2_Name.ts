let personname :string='HAFsa ';
let lowercase :string = personname.toLowerCase();
let uppercase :string = personname.toUpperCase();
let titlecase:string = personname.split('').map(word => word.charAt(0).toLowerCase()).join('')
console.log(`hello ${personname},your name in :
    lowercase:${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`)

