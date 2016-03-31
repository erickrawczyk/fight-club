'use strict';
class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
}

Character.prototype.attackCharacter = function(defender) {
  var damage = this.attack - defender.defense;
  damage += Math.floor(Math.random() * 6);
  defender.health -= damage;
  console.log(this.name + " does " + damage + " damage to " + defender.name);
}

var player = new Character('Edward Norton', 100, 25, 20);
var enemy  = new Character('Tyler Durden', 100, 25, 20);
var round  = 1;

while (player.health && enemy.health) {
  runRound(player, enemy)
  round++;
}

function runRound(p1, p2) {
  console.log(`----- Begin Round ${round} -----`);
  p1.attackCharacter(p2);
  if (p2.health <= 0) { return endGame(p1, p2); }
  p2.attackCharacter(p1);
  if (p1.health <= 0) { return endGame(p2, p1); }
  console.log(p1.name + ' health: ' + p1.health);
  console.log(p2.name + ' health: ' + p2.health);
  console.log();
}

function endGame(winner, loser) {
  console.log('\n======== GAME OVER ========');
  console.log(winner.name + " wins against " + loser.name + " with " + winner.health + " health remaining!");
  process.exit();
}
