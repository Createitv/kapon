// utils.js
function _debounce(fn, delay = 300) {
  let timer = null;
  return function () {
    let _this = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, delay);
  };
}
export {
  _debounce
}
