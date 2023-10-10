import ArrayBufferConverter from '../js/ArrayBufferConverter'

test('checking the operation of the class and methods', () => {
    const buffer = new ArrayBufferConverter();
    expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})