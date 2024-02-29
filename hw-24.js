'use strict';

let ladder = {
  step: 0,
  up: function () {
    this.step++;
  },
  down: function () {
    this.step--;
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1