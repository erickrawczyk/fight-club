'use strict';

// Character Class definition
class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
}

Character.prototype.attackCharacter = function(defender) {
  // Implement me!
}

// Main Fight Logic
var player = new Character('Edward Norton', 100, 25, 20);
var enemy  = new Character('Tyler Durden', 100, 25, 20);
var round  = 1;

// Implement the main loop here

function runRound(round, p1, p2) {
  // Implement me!
}

function endGame(winner, loser) {
  // Implement me!
}
