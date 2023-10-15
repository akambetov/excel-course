class Dom {
  constructor(selector) {
    this.$nativeEl =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$nativeEl.innerHTML = html;
      // return this, чтобы иметь возможность чейнить
      // $('div').html('<h1>div content</h1>').clear()
      return this;
    }

    return this.$nativeEl.outerHTML.trim();
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$nativeEl;
    }

    if (Element.prototype.append) {
      this.$nativeEl.append(node);
    } else {
      this.$nativeEl.appendChild(node);
    }

    return this;
  }

  on(eventName, callback) {
    this.$nativeEl.addEventListener(eventName, callback);
  }

  off(eventName, callback) {
    this.$nativeEl.removeEventListener(eventName, callback);
  }

  clear() {
    this.html('');

    return this;
  }
}

export const $ = (selector) => new Dom(selector);

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};
