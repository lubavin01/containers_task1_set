import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }
  
  add(member) {
    if (!(member instanceof Character)) {
      throw Error('Only instance of Character can be added');
    }

    if (this.members.has(member)) {
      throw Error('member is already in a team');
    }

    this.members.add(member);
  }

  addAll(...members) {
    members.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }
}