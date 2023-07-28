// This object contains all the Phaser configurations to load our game
import Phaser from 'phaser';

// Import stylesheets
import './style.css';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  heigth: 640,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: false
    },
  }
};

// Create the game instance
const game = new Phaser.Game(config);

function preload() { }

function create() { }

function update() { }