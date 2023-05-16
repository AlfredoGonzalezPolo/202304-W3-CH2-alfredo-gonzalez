import { Component } from './components';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<ul class="characters-list row list-unstyled">
      <li class="character col">
        
      </li>
    </ul>`;
  }
}
