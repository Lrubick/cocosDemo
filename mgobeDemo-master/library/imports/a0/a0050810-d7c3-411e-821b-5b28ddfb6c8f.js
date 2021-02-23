"use strict";
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