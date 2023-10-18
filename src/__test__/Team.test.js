import  Team from '../js/TeamSelection';
import Bowman from '../js/Class/Bowman';
import Swordsman from '../js/Class/Swordsman';
import Undead from '../js/Class/Undead';

test('Checking the addition of characters to the group', () => {
    const newTeam = new Team();
    const classBowman = new Bowman('Bowman');
    const classSwordsman = new Swordsman('Swordsman');
    const classUndead = new Undead('Undead');
    newTeam.add(classBowman);
    expect(newTeam.members).toEqual(newTeam.members);
    expect(() => newTeam.add(classBowman)).toThrow('Персонаж уже есть в команде!');
    expect(newTeam.addAll(classBowman, classSwordsman, classUndead)).toEqual(newTeam.addAll(classBowman, classSwordsman, classUndead));
    expect(newTeam.toArray()).toEqual(newTeam.toArray());
})

test('test genrator method', () => {
  const newTeam = new Team();
  const classBowman = new Bowman('Bowman');
  const classSwordsman = new Swordsman('Swordsman');
  const classUndead = new Undead('Undead');
  newTeam.addAll(classBowman, classSwordsman, classUndead)
  newTeam.toArray();
  const result = newTeam[Symbol.iterator](newTeam.members);
  expect(result.next()).toEqual({
    value: {
      name: 'Bowman',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    },
    done: false
  });
  expect(result.next()).toEqual({
    value: {
      name: 'Swordsman',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    },
    done: false
  });
  expect(result.next()).toEqual({
    value: {
      name: 'Undead',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    },
    done: false
  });
  expect(result.next()).toEqual({ value: undefined, done: false });
})