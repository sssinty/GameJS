export default class ArrayBufferConverter {
    load(buffer) {
      return new Int16Array(buffer);
    }

    toString() {
      let str = '';
      for(let letters of this.load(getBuffer())) {
        str += String.fromCharCode(letters);
      }
      return str;
    }
}

function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  
  