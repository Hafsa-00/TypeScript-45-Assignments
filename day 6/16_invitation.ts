
//continue of 14 ,15 

let invitees: string[] = ["maryam", "anusha", "ayesha"];
let absent_invite:string='maryam';
let new_invite:string='asiya';

invitees[0]=new_invite;

console.log(`${absent_invite} is not coming.`);

console.log("\nGood news, everyone! We've found a bigger dinner table, so we have more space now.");

invitees.unshift("aqsa");  // New guest at the beginning
invitees.splice(invitees.length / 2, 0, "isra");  // New guest in the middle
invitees.push("hamna"); //new guest at the end

invitees.forEach((invitee) => {
    console.log(`\nAssalamualaikum ${invitee},\n I would like to invite you to dinner.\n Thank you.`);
});


