export default class Character {
  constructor() {
    this.health = 100;
  }

  levelUp() {
    if (this.health) {
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw Error('Character is dead');
    }
  }
}
