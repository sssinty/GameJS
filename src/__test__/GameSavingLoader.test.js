import GameSavingLoader from '../js/SavedGame/GameSavingLoader.js';
jest.setTimeout(6000)
it('testing an async method',  async () => {
    try {
        const dataUser = new GameSavingLoader();
        const data = await dataUser.load().then();
        expect(data).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
    } catch (e) {
        expect(e).toThrow("error!");
    }
})