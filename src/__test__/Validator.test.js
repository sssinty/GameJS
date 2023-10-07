import Validator from '../js/Validator'
test('checking the entered name', () => {
    const validtionName = new Validator()
    expect(validtionName.validateUsername('name')).toBe(true);
    expect(validtionName.validateUsername('--name')).toBe(false);
    expect(validtionName.validateUsername('g1111ame')).toBe(true);
})