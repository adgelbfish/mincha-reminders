'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _easynexmo = require('easynexmo');

var _easynexmo2 = _interopRequireDefault(_easynexmo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nexmoKey = process.env.NEXMO_API_KEY;
var nexmoSecret = process.env.NEXMO_API_SECRET;

_easynexmo2.default.initialize(nexmoKey, nexmoSecret, false);

exports.default = _easynexmo2.default;
//# sourceMappingURL=nexmoInit.js.map