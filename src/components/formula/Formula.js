import { ExcelCompnent } from '../../core/ExcelComponent';

export class Formula extends ExcelCompnent {
  static className = 'excel__formula';

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }
}
