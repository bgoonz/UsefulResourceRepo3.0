// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.
// The console.log() statements should still return what is expected of them.

class GameObject {
  constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(characterStatsOptions) {
    super(characterStatsOptions);
    this.hp = characterStatsOptions.hp;
    this.name = characterStatsOptions.name;
    this.isAlive = true;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

// Item stats abstract interface class for items to derive from
class ItemStats extends GameObject {
  constructor(attr) {
    super(attr);
    this.power = attr.power;
    this.weight = attr.weight;
    this.isWearable = attr.isWearable;
    this.isConsumable = attr.isConsumable;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanoidOptions) {
    super(humanoidOptions);
    this.faction = humanoidOptions.faction;
    this.weapons = humanoidOptions.weapons;
    this.language = humanoidOptions.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// generic Player class
class Player extends Humanoid {
  constructor(attr) {
    super(attr);
    this.inventory = attr.inventory; // an array of items
    this.attacks = attr.attacks; // an array of attack objects
    this.uiHP = attr.uiHP;
    this.uiAtkTxt = attr.uiAtkTxt;
    this.domObj = window.document;
    this.uiStatus = attr.uiStatus;
  }

  /*
   * takes in a weapon object and a enemy calculates
   * the damage and calls the enemies hurt function
   *  passing on the damage
   */

  attack(weapon, enemy) {
    let damage = weapon.power * (Math.floor(Math.random(2)) + 1);
    enemy.hurt(damage);
  }
  // takes in an enemy object, a weaponID and updates the UI
  uiAttack(enemy, weaponID) {
    let damage = Math.floor(Math.random() * 100 + 1);
    this.domObj.getElementById(enemy.uiStatus).innerHTML = enemy.hurt(damage);
    this.domObj.getElementById(enemy.uiHP).innerHTML = enemy.hp;
    window.document.getElementById(
      this.uiAtkTxt
    ).innerHTML = `${this.name} uses his ${this.weapons[weaponID]} to harm ${enemy.name} doing ${damage} damage.`;
    return `${this.name} uses his ${this.weapons[weaponID]} to harm ${enemy.name} doing ${damage} damage.`;
  }

  /*
   * takes in damage as a parameter decrements hp
   * by damage and checks if the player has hit 0 or
   * less hp if they have the isAlive stat is set to false
   */

  hurt(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
      this.isAlive = false;
      console.log(`${this.name} has died!`);
      return `${this.name} has died!`;
    }
    console.log(`${this.name} is alive!`);
    return `${this.name} is alive!`;
  }
}

class Hero extends Player {
  constructor(attr) {
    super(attr);
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: "Bruce",
  faction: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue",
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: "Sir Mustachio",
  faction: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Toungue",
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: "Lilith",
  faction: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish",
});

const p1 = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 300,
  name: "Bob",
  faction: "Kingstanding",
  weapons: ["Bow", "Dagger"],
  language: "Brummie",
  uiAtkTxt: "p1-attack-message",
  uiHP: "p1-hp",
  uiStatus: "p1-status",
});

const p2 = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 300,
  name: "Dave",
  faction: "Erdington",
  weapons: ["Gun", "Dagger"],
  language: "Brummie",
  uiAtkTxt: "p2-attack-message",
  uiHP: "p2-hp",
  uiStatus: "p2-status",
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(...mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
