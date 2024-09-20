var invitees = ["maryam", "anusha", "ayesha"];
var absent_invite = 'maryam';
var new_invite = 'asiya';
invitees[0] = new_invite;
console.log("".concat(absent_invite, " is not coming."));
console.log("\nGood news, everyone! We've found a bigger dinner table, so we have more space now.");
invitees.unshift("aqsa"); // New guest at the beginning
invitees.splice(invitees.length / 2, 0, "isra"); // New guest in the middle
invitees.push("hamna"); //new guest at the end
invitees.forEach(function (invitee) {
    console.log("\nAssalamualaikum ".concat(invitee, ",\n I would like to invite you to dinner.\n Thank you."));
});
