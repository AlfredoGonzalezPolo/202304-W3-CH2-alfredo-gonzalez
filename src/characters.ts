export abstract class Characters {
  static tvShow = 'GoT';
  name: string;
  family: string;
  age: number;
  alive: boolean;
  speech: string;
  constructor(name: string, family: string, age: number) {
    Characters.tvShow = 'GoT';
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = true;
    this.speech = '';
  }

  goDie() {
    this.alive = false;
  }

  communicate() {
    return this.speech;
  }
}
