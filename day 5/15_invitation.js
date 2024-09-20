var invitees = ["maryam", "anusha", "ayesha"];
var absent_invite = 'maryam';
var new_invite = 'asiya';
invitees[0] = new_invite;
invitees.forEach(function (invitee) {
    console.log("Assalamualaikum ".concat(invitee, ",\n I would like to invite you to dinner.\n Thank you."));
});
console.log("".concat(absent_invite, " is not coming."));
