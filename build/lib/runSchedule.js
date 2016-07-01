'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _later = require('later');

var _later2 = _interopRequireDefault(_later);

var _schedule = require('../config/schedule');

var _schedule2 = _interopRequireDefault(_schedule);

var _scheduledTask = require('./scheduledTask');

var _scheduledTask2 = _interopRequireDefault(_scheduledTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var runSchedule = function runSchedule() {
    var t = _later2.default.setInterval(_scheduledTask2.default, _schedule2.default);
    console.log('schedule runner started');
};

exports.default = runSchedule;
//# sourceMappingURL=runSchedule.js.map