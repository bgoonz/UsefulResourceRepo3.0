/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  // TODO: refactor the game objects na general construction in to classes and seperate files. Also extract the battle system in to its own modules
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attr) {
  this.createdAt = attr.createdAt;
  this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function() { return `${this.name} was removed from the game.`; }

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attr) {
  GameObject.call(this, attr);
  this.hp = attr.hp;
  this.name = attr.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() { return `${this.name} took damage.`; }


/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(attr) {
  CharacterStats.call(this, attr);
  this.faction = attr.faction;
  this.weapons = attr.weapons;
  this.language = attr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() { return `${this.name} offers a greeting in ${this.language}.`; }
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  

  function Villian(attr) {
    Humanoid.call(this, attr);
  }
  //TODO: implement more prototype functions for attacks

  Villian.prototype = Object.create(Humanoid.prototype);
  
  Villian.prototype.shanks = function(hero){
    hero.hp -= 3;
    return `${this.name} shanks ${hero.name} on the ankle.`;
  }

  Villian.prototype.shoots = function(hero){
    hero.hp -= 40;
    return `${this.name} shoots ${hero.name} in the gut.`;
  }


  Villian.prototype.flail = function(hero){
    let damage = Math.floor((Math.random() * 100) + 1)
    let hpVal = window.document.getElementById('heroHP');
    let atkTxt = window.document.getElementById('villianAtkTxt');
    hero.hp -= damage
    hpVal.innerHTML = hero.hp;
    atkTxt.innerHTML = `${this.name} flails and ${hero.name} loses ${damage} hp.`;
    console.log(`${this.name} flails and ${hero.name} loses ${damage} hp.`);
    return `${this.name} flails and ${hero.name} loses ${damage} hp.`;
  }

  function Hero(attr) {
    Humanoid.call(this, attr);
  }
  
  Hero.prototype = Object.create(Humanoid.prototype);
  
  Hero.prototype.runover = function(villian){
    villian.hp -= 20;
    return `${this.name} uses his ${this.weapons[0]} to run over ${villian.name} and renders ${villian.name} unconscious.`;
  }

  Hero.prototype.runover2 = function(villian){
    let hpVal = window.document.getElementById('villianHp');
    let atkTxt = window.document.getElementById('heroAtkTxt');
    let damage = Math.floor((Math.random() * 100) + 1)
    villian.hp -= damage;
    hpVal.innerHTML = villian.hp;
    atkTxt.innerHTML = `${this.name} uses his ${this.weapons[0]} to run over ${villian.name} and renders ${villian.name} unconscious, (doing 20 damage).`;
    return `${this.name} uses his ${this.weapons[0]} to run over ${villian.name} and renders ${villian.name} unconscious.`;
  }

  Hero.prototype.kill = function(villian){
    villian.hp = 0;
    return `${this.name} uses his ${this.weapons[1]} and blows ${villian.name}'s head off (no heros were harmed during this explosive event).`;
  }

  Hero.prototype.tankMissile = function(villian){
    let hpVal = window.document.getElementById('villianHp');
    let atkTxt = window.document.getElementById('heroAtkTxt');
    villian.hp = 0;
    hpVal.innerHTML = villian.hp;
    if(villian.hp <= 0) {
      let btn = window.document.getElementById('vilAtk');
      btn.remove();
    }
    atkTxt.innerHTML = `${this.name} uses his ${this.weapons[1]} and blows ${villian.name}'s head off (no heros were harmed during this explosive event).`;
    return `${this.name} uses his ${this.weapons[1]} and blows ${villian.name}'s head off (no heros were harmed during this explosive event).`;
  }

  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

// vic the villian
  const vic = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 12,
      width: 20,
      height: 40,
    },
    hp: 10000,
    name: 'Vic',
    faction: 'Brum Slum',
    weapons: [
      'Knife',
      'Gun'
    ],
    language: 'Brummie'
  });

  // hector the hero

  const hector = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 22,
      width: 200,
      height: 40,
    },
    hp: 10000,
    name: 'Hector',
    faction: 'Londinium',
    weapons: [
      'Car',
      'Tank Missile'
    ],
    language: 'Cockney',
  });

// The epic battle
  // console.log(vic.shanks(hector));
  // console.log(`${hector.name}'s hp is ${hector.hp}`);
  // console.log(hector.runover(vic));
  // console.log(`${vic.name}'s hp is ${vic.hp}`);
  // console.log(vic.flail(hector));
  // console.log(hector.kill(vic));
  // console.log(vic.destroy());