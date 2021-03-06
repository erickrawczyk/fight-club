'use strict';

// Character Class definition
class Character {
  constructor(name, health, attack, defense, isNinja) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.ninja = true;
  }
}

// This is the method to attack another character
Character.prototype.attackCharacter = function(defender) {
  var damage = this.attack - defender.defense;
  damage += Math.floor(Math.random() * 6);
  defender.health -= damage;
  console.log(this.name + " does " + damage + " damage to " + defender.name);
}

// Main Fight Logic
var player = new Character('Edward Norton', 100, 25, 20);
var enemy  = new Character('Tyler Durden', 100, 25, 20);
var round  = 1;
//
while (player.health && enemy.health) {
  runRound(round, player, enemy);
  round++;
  console.log();
}

function runRound(round, p1, p2) {
  console.log(`----- Round ${round} -----`);
  p1.attackCharacter(p2);
  if (p2.health <= 0) { return endGame(p1, p2); }
  p2.attackCharacter(p1);
  if (p1.health <= 0) { return endGame(p2, p1); }
  console.log(p1.name + ' health: ' + p1.health);
  console.log(p2.name + ' health: ' + p2.health);
}

function endGame(winner, loser) {
  console.log('\n======== GAME OVER ========');
  console.log(winner.name + " wins against " + loser.name + " with " + winner.health + " health remaining!");
  return process.exit();
}
