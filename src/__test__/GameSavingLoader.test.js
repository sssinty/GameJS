import GameSavingLoader from '../js/SavedGame/GameSavingLoader.js';
jest.setTimeout(6000)


test('testing an async method',  async () => {
    const dataUser = new GameSavingLoader();
    await dataUser.load().then((saving) => {
      expect(saving).toEqual({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
    });
})
test('', async () => {
    await expect(async () => {
    const dataUser = new GameSavingLoader();
    await dataUser.load();
    }).rejects.toThrowError('Failed to load game saving!');
})