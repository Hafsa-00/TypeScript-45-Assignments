
function make_sandwich(items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(item);
    }
}

make_sandwich(["cheese",  "tomato",'bread']);
make_sandwich(["chicken", "lettuce", "mayo",'bread']);
make_sandwich(["egg", "bacon","lettuce" , "tomato",'bread']);