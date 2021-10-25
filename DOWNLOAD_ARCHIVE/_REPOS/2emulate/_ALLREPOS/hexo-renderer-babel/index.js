const babel = require("@babel/core");

hexo.extend.renderer.register('es6', 'js', function(data, options, callback){
  callback(null, babel.transform(data.text, {
    filename: data.path
  }).code);
});
