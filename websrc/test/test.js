
require('./style.css');
require('./test.scss');

var catObj = require('./data.js');
console.log(catObj);

let txt = 'welcome to webpack';

// alert('use by webpack!!!!');
document.write(txt);

var sayHello = (name)=>{
  return 'hello ' + name;
};

document.write(sayHello('jianfeng_huang'));
