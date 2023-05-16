import { Kings } from './kings';
import { Fighters } from './fighters';
import { Adviser } from './adviser';
import { Squires } from './squires';

export const createCharacters = () => {
  const charactersList = [];

  charactersList.push(new Kings('Joffrey', 'Baratheon', 36, 7));
  charactersList.push(new Fighters('Jaime', 'Lannister', 28, 'sword', 7));
  charactersList.push(new Fighters('Daenerys', 'Targaryen', 27, 'sword', 9));
  charactersList.push(new Adviser('Tyrion', 'Lannister', 31, 'Daenerys'));
  charactersList.push(new Squires('Bronn', 'Blackwaters', 32, '', 8));

  return charactersList;
};
