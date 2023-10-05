import Validator from '../js/Validator'
test('checking the entered name', () => {
    const validtionName = new Validator()
    expect(validtionName.validateUsername('name')).toBe('name');
    expect(() => validtionName.validateUsername('1name')).toThrow('Имя не должно содержать более трёх цифр, а также начинаться и заканчиваться цифрами, знаками - и _');
})