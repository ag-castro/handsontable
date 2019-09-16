"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

exports.__esModule = true;
exports.condition = condition;
exports.CONDITION_NAME = void 0;

var C = _interopRequireWildcard(require("../../../i18n/constants"));

var _conditionRegisterer = require("../conditionRegisterer");

var _contains = require("./contains");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CONDITION_NAME = 'not_contains';
exports.CONDITION_NAME = CONDITION_NAME;

function condition(dataRow, inputValues) {
  return !(0, _conditionRegisterer.getCondition)(_contains.CONDITION_NAME, inputValues)(dataRow);
}

(0, _conditionRegisterer.registerCondition)(CONDITION_NAME, condition, {
  name: C.FILTERS_CONDITIONS_NOT_CONTAIN,
  inputsCount: 1,
  showOperators: true
});