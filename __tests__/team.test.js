import Team from '../team';
import Bowman from '../bowman';
import Swordman from '../swordman';

test('is not instance of Character', () => {
  const team = new Team();

  expect(() => { team.add('testCharacter') }).toThrow();
});

test('bowman added to team', () => {
  const team = new Team();
  const bowman = new Bowman();

  team.add(bowman);

  expect(team.toArray()).toEqual([bowman]);
});

test('bowman can not de added twice', () => {
  const team = new Team();
  const bowman = new Bowman();

  team.add(bowman);

  expect(() => { team.add(bowman) }).toThrow();
});

test('addAll', () => {
  const team = new Team();
  const bowman = new Bowman();
  const swordman = new Swordman();

  team.addAll(bowman, bowman, swordman, 'test'); 

  expect(team.toArray()).toEqual([bowman, swordman, 'test']);
});
