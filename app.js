import Team from './team';
import Character from './character';
import Bowman from './bowman';

const team = new Team();

try {
  team.add('123');
} catch {
  console.log('unsuccessful');
}


const bowman = new Bowman();

team.add(bowman);

console.log(team.toArray());


