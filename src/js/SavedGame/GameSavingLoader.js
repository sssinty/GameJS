import parse from './parser.js';
import read from './reader.js';

class GameSaving {
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}

export default class GameSavingLoader {
  async load() {
    try {
        const data = await read();
        const parsedData  = await parse(data)
        return new GameSaving(parsedData);
      } catch (error) {
        throw new Error('Failed to load game saving!');
      };
  }
}