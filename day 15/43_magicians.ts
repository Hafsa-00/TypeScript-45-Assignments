let magicians: string[] = ['hamdan', 'anus', 'naila', 'amna', 'mano'];

function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians[i] = "the Great " + magicians[i];
  }
  return greatMagicians;
}

show_magicians(magicians);

let greatMagicians: string[] = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
