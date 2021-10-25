function PunctuationRemover(opts) {
  if (!(this instanceof PunctuationRemover))
    return new PunctuationRemover(opts);

  var self = this;
  self.opts = opts;
  if (self.opts === undefined) {
    self.opts = {};
  }

  self.remove = function (text) {
    var puntuationRe = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    text = text.replace(puntuationRe, "");
    return text;
  };
}
