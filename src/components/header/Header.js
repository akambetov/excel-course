import { ExcelCompnent } from '../../core/ExcelComponent';

export class Header extends ExcelCompnent {
  toHTML() {
    // вызов родительского метода
    // return super.toHTML();
    return `<h1>Header</h1>`;
  }
}
