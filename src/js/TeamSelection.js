export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character){
    if(this.members.has(character)) {
        throw new Error('Персонаж уже есть в команде!')
    }
    this.members.add(character);
  }

  addAll(...characters){
    for(const character in characters) {
        this.members.add(characters[character]);
    }
  }

  toArray(){
    this.members = Array.from(this.members)
    return this.members
  }

  *[Symbol.iterator](array) {
    for(let index = 0; index <= array.length; index++) {
      yield array[index]
    }
  }
}