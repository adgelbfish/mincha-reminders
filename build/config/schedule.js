'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _later = require('later');

var _later2 = _interopRequireDefault(_later);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_later2.default.date.localTime();

var schedule = _later2.default.parse.text('on monday, tuesday, wednesday, thursday at 1:44 pm');

exports.default = schedule;
//# sourceMappingURL=schedule.js.map