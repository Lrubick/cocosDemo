
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0050gQ18NBHoIbWyjd+2yP', 'Item');
// Script/Item.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    logLable: cc.Label
  },
  onLoad: function onLoad() {
    var self = this;
  },
  updateItem: function updateItem(obj) {
    this.logLable.string = obj;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibG9nTGFibGUiLCJMYWJlbCIsIm9uTG9hZCIsInNlbGYiLCJ1cGRhdGVJdGVtIiwib2JqIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLO0FBREwsR0FIUDtBQU9MQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDSCxHQVRJO0FBV0xDLEVBQUFBLFVBQVUsRUFBRSxvQkFBVUMsR0FBVixFQUFlO0FBQ3ZCLFNBQUtMLFFBQUwsQ0FBY00sTUFBZCxHQUF1QkQsR0FBdkI7QUFDSDtBQWJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxvZ0xhYmxlOiBjYy5MYWJlbFxuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIH0sXG5cbiAgICB1cGRhdGVJdGVtOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHRoaXMubG9nTGFibGUuc3RyaW5nID0gb2JqO1xuICAgIH1cblxufSk7Il19