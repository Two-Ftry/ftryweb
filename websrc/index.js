/**
 * @desc 调试入口文件（entryPort通过webpack的DefinePlugin注入到全局）
 */
var app = document.getElementById('app');
var html = '';
for(var key in entryPort){
  if(key == 'index'){
    continue;
  }
  html += '<div><a href="./' + key + '.html">./' + key + '.html</a></div>';
}
app.outerHTML = html;
