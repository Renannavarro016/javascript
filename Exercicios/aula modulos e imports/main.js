
import Hero, { printHeroName as HeroName, printHeroPower as HeroPower } from './superHero.class.js';

const name = 'Superman';
const power = 'Visão Raio-x';

const hero = new Hero(name, 'Raio-x', power, 'Visão raio-x');

HeroName(hero);
HeroPower(hero);


//console.log(hero.name);
//console.log(hero.power);