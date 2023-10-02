export default function sortHeroHealt(array) {
  return array.sort((aHero, bHero) => bHero.health - aHero.health);
}
