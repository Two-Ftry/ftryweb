
var EcCommon = {};

var MarkView = require('./MarkView');
var EcPage = require('./EcPage');

EcCommon.install = function(Vue){
  Vue.component(MarkView.name, MarkView);
  Vue.component(EcPage.name, EcPage);
};

module.exports = EcCommon;
