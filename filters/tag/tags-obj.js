// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(req, res, next) {
    return (__F('tag')).getAll(1, 500, null, "id desc", function(error, tags) {
      var ts;
      ts = {};
      tags.forEach(function(t) {
        return ts[t.id] = t;
      });
      res.locals.ts = ts;
      return next();
    });
  };

}).call(this);
