import { ExcelCompnent } from '../../core/ExcelComponent';
import { cteateTable } from './table.template';

export class Table extends ExcelCompnent {
  static className = 'excel__table';

  toHTML() {
    return cteateTable();
  }
}
