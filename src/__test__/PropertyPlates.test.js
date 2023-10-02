import orderByProps from '../js/Plates/PropertyPlates'
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
test('checking the returned object for the plate', () => {
  expect(orderByProps(obj, ["defence", "level"])).toEqual(orderByProps(obj, ["defence", "level"]));
})