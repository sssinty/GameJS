import {MathLog ,Magician, Undead} from '../js/MathLog/MathLog.js'

test('hero test with effect stoned', () => {
    const HeroMagician = new Magician(2);
    expect(HeroMagician.attack).toBe(85);
  })
  test('hero test without effect stoned', () => {
    const HeroUndead = new Undead(2);
    expect(HeroUndead.attack).toBe(180);
  })