//放到全局的vue组件
var EcCommon = {};

var MarkView = require('./common/MarkView');
var EcPage = require('./common/EcPage');
var EcButton = require('./form/EcButton');
var EcInput = require('./form/EcInput');

EcCommon.install = function(Vue){
  Vue.component(MarkView.name, MarkView);
  Vue.component(EcPage.name, EcPage);
  Vue.component(EcButton.name, EcButton);
  Vue.component(EcInput.name, EcInput);
};

module.exports = EcCommon;
