"use strict";
let current_users = ['ahmed', 'hamdan', 'sara', 'AQSA', 'aman', 'hamna', 'hafsa'];
let new_users = ['anusha', 'umer', 'faiz', 'samra', 'saima', 'maryam', 'aman', 'aqsa'];
for (let new_user of new_users) {
    if (current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} has already been used, please enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
}
