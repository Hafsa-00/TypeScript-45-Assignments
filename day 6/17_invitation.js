var invitees = ["maryam", "anusha", "ayesha"];
var absent_invite = 'maryam';
var new_invite = 'asiya';
invitees[0] = new_invite;
console.log("\n".concat(absent_invite, " is not coming."));
console.log("\nGood news, everyone! We've found a bigger dinner table, so we have more space now.");
invitees.unshift("aqsa"); // New guest at the beginning
invitees.splice(invitees.length / 2, 0, "isra"); // New guest in the middle
invitees.push("hamna"); //new guest at the end
console.log("\nI'm sorry to inform you that the new dinner table won't arrive in time for the dinner, and I have space for only two guests.");
while (invitees.length > 2) {
    var removed_guest = invitees.pop();
    console.log("\nDear ".concat(removed_guest, ", I'm sorry to inform you that I can't invite you to dinner "));
}
invitees.forEach(function (invitee) {
    console.log("\nAssalamualaikum ".concat(invitee, ",\nyou're still invited to the dinner. Looking forward to seeing you.."));
});
invitees.length = 0;
console.log(invitees);
