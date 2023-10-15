import { DomListener } from './DomListener';

export class ExcelCompnent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name ?? '';
  }
  // Возвращает шаблом компонента
  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}
