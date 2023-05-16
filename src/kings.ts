import { Characters } from './characters';

export class Kings extends Characters {
  regnarYears: number;
  speech: string;
  constructor(name: string, family: string, age: number, regnarYears: number) {
    super(name, family, age);
    this.regnarYears = regnarYears;
    this.speech = "All of u'll die";
  }
}
