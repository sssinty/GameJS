import Bowman from "../../js/Class/Bowman";
test('properly created object', () => {
    const bowman = new Bowman('name')
    const correct = {attack: 25, defence: 25, health: 100, level: 1, name: 'name', type: 'Bowman'}
    expect(bowman).toEqual(correct);
})