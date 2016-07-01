'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nexmoInit = require('./nexmoInit');

var _nexmoInit2 = _interopRequireDefault(_nexmoInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fromNumber = process.env.MINCHA_REMINDERS_FROM_NUMBER;

var sendText = function sendText(to, message) {
    return _nexmoInit2.default.sendTextMessage(fromNumber, to, message, {}, function (err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(response);
        }
    });
};

exports.default = sendText;
//# sourceMappingURL=sendText.js.map