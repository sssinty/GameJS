import parse from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  async load() {
    try {
        const data = await read();
        const value = parse(data);
        return value;
      } catch (error) {
        throw new Error("error!");
      };
  }
}