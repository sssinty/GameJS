import Swordsman from "../../js/Class/Swordsman";
test('properly created object', () => {
    const bowarman = new Swordsman('name')
    const correct = {attack: 40, defence: 10, health: 100, level: 1, name: 'name', type: 'Swordsman'}
    expect(bowarman).toEqual(correct);
})