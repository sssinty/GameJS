import Daemon from "../../js/Class/Daemon";
test('properly created object', () => {
    const daemon = new Daemon('name')
    const correct = {attack: 10, defence: 40, health: 100, level: 1, name: 'name', type: 'Daemon'}
    expect(daemon).toEqual(correct);
})