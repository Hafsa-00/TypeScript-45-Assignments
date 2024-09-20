function make_album(artist: string, title: string, track?: number) {
    let album = {
        artists: artist,
        titles: title,
        tracks: track
    };
    return album;
}

let album1 = make_album("Atif Aslam", "Jal Pari");
console.log(album1);

let album2 = make_album("Ali Zafar", "Huqa Pani");
console.log(album2);

let album3 = make_album("Strings", "Dhaani", 10);
console.log(album3);
