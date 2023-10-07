import  Team from '../js/TeamSelection';
import Bowerman from '../js/Class/Bowerman';
import Swordsman from '../js/Class/Swordsman';
import Undead from '../js/Class/Undead';

test('Checking the addition of characters to the group', () => {
    const newTeam = new Team();
    const classBowerman = new Bowerman('Bowerman');
    const classSwordsman = new Swordsman('Swordsman');
    const classUndead = new Undead('Undead');
    newTeam.add(classBowerman);
    expect(newTeam.members).toEqual(newTeam.members);
    expect(() => newTeam.add(classBowerman)).toThrow('Персонаж уже есть в команде!');
    expect(newTeam.addAll(classBowerman, classSwordsman, classUndead)).toEqual(newTeam.addAll(classBowerman, classSwordsman, classUndead));
    expect(newTeam.toArray()).toEqual(newTeam.toArray());
})