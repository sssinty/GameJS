import Undead from "../../js/Class/Undead";
test('properly created object', () => {
    const bowarman = new Undead('name')
    const correct = {attack: 25, defence: 25, health: 100, level: 1, name: 'name', type: 'Undead'}
    expect(bowarman).toEqual(correct);
})