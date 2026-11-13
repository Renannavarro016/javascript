import Hero from './superHero.class.js';

const name = 'Clark Kent';
const power = 'Super força';

const hero = new Hero(name, 'Superman', power, 'visao raio-x');

console.log(hero.name);
console.log(hero.power);