import sortHeroHealt from '../js/Health/SortHeroHealth';

test('sorting an array with heroes in ascending order', () => {
  const data = ([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  const dataSort = data.sort((aHero, bHero) => bHero.health - aHero.health);

  expect(sortHeroHealt(data)).toEqual(dataSort);
});
