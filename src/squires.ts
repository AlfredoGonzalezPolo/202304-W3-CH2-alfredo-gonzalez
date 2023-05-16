import { Characters } from './characters.js';

export class Squires extends Characters {
  servedCharacter: string;
  ballSuckerLevel: number;
  constructor(
    name: string,
    family: string,
    age: number,
    servedCharacter: string,
    ballSuckerLevel: number
  ) {
    super(name, family, age);
    this.servedCharacter = servedCharacter;
    this.ballSuckerLevel = ballSuckerLevel;
    this.speech = "I'm a loser";
  }
}
