import Zombie from "../../js/Class/Zombie";
test('properly created object', () => {
    const bowarman = new Zombie('name')
    const correct = {attack: 40, defence: 10, health: 100, level: 1, name: 'name', type: 'Zombie'}
    expect(bowarman).toEqual(correct);
})