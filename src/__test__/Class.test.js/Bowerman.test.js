import Bowerman from "../../js/Class/Bowerman";
test('properly created object', () => {
    const bowerman = new Bowerman('name')
    const correct = {attack: 25, defence: 25, health: 100, level: 1, name: 'name', type: 'Bowerman'}
    expect(bowerman).toEqual(correct);
})