import Magician from "../../js/Class/Magician";
test('properly created object', () => {
    const bowarman = new Magician('name')
    const correct = {attack: 10, defence: 40, health: 100, level: 1, name: 'name', type: 'Magician'}
    expect(bowarman).toEqual(correct);
})