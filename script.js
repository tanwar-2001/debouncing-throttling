const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// const throttledCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// debounce polyfill
const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debouncedCount = myDebounce(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

const myTrottle = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) {
      return;
    }
    last = now;
    return cb(...args);
  };
};

const throttledCount = myTrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  //   debouncedCount();
  throttledCount();
});
