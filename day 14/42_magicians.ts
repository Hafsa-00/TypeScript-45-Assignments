let magicians:string[] = ['hamdan','anus','naila','amna','mano'];
function show_magicians (magicians:string[]){
  for (let magician of magicians){
    console.log(magician);
  }
}
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(`The great ${magicians[i]}`);
  }
}
show_magicians(magicians);
make_great(magicians);