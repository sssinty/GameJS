import ErrorRepository from '../js/error/ErrorRepository';
test('', () => {

    const error = new ErrorRepository()
    expect(error.translate(1)).toBe('Unknown error')
    expect(error.translate(100)).toBe('Нельзя повысить уровень умершего!')
    // expect(error.translate(1)).toBe('Unknown error')
})
