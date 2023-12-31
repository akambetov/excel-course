import { ExcelCompnent } from '../../core/ExcelComponent';

export class Formula extends ExcelCompnent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(e) {
    console.log('Formula onInput: ', e.target.textContent);
  }

  onClick(e) {
    console.log('Formula onClick: ', e);
  }
}
