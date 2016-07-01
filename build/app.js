'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _runSchedule = require('./lib/runSchedule');

var _runSchedule2 = _interopRequireDefault(_runSchedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/inbound', function (req, res) {
        console.log(req.query);
        res.send('message received');
});

app.listen(3000);

(0, _runSchedule2.default)();
//# sourceMappingURL=app.js.map