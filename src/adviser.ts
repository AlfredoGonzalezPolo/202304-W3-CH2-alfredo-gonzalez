import { Characters } from './characters.js';

export class Adviser extends Characters {
  advisedCharacter: string;
  constructor(
    name: string,
    family: string,
    age: number,
    advisedCharacter: string
  ) {
    super(name, family, age);
    this.advisedCharacter = advisedCharacter;
    this.speech = "Don't know why but I think I'll die";
  }
}
