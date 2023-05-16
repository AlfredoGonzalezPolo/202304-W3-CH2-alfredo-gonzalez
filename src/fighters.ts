import { Characters } from './characters.js';

export class Fighters extends Characters {
  weaponUsed: string;
  skill: number;
  constructor(
    name: string,
    family: string,
    age: number,
    weaponUsed: string,
    skill: number
  ) {
    super(name, family, age);
    this.weaponUsed = weaponUsed;
    this.skill = skill;
    this.speech = 'First punch then ask';
  }
}
