'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sendText = require('./sendText');

var _sendText2 = _interopRequireDefault(_sendText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groupMeNumber = process.env.MINCHA_REMINDERS_TO_NUMBER;
var textMessageContent = process.env.MINCHA_REMINDERS_TEXT_MESSAGE_CONTENT;

var scheduledTask = function scheduledTask() {
    return (0, _sendText2.default)(groupMeNumber, textMessageContent);
};

exports.default = scheduledTask;
//# sourceMappingURL=scheduledTask.js.map