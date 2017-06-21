'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Catenary = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _dc = require('./dc');

var _ac = require('./ac');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Catenary = exports.Catenary = function Catenary() {
  (0, _classCallCheck3.default)(this, Catenary);
};

Catenary.dc = _dc.dc;
Catenary.ac = _ac.ac;