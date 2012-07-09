define([ "true" ], function(jade) {
  return function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var __jade = [ {
      lineno: 1,
      filename: "/home/contra/Projects/jaded/test/in/nested/user.jade"
    } ];
    try {
      var buf = [];
      with (locals || {}) {
        var interp;
        __jade.unshift({
          lineno: 1,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 1,
          filename: __jade[0].filename
        });
        if (username) {
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push("Logged in as");
          __jade.shift();
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push('<a id="logout" href="#/logout">');
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push("" + escape((interp = username) == null ? "" : interp) + " | (logout)");
          __jade.shift();
          __jade.shift();
          buf.push("</a>");
          __jade.shift();
          __jade.shift();
        } else {
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 5,
            filename: __jade[0].filename
          });
          buf.push("Not Logged In");
          __jade.shift();
          __jade.shift();
        }
        __jade.shift();
        __jade.shift();
      }
      return buf.join("");
    } catch (err) {
      rethrow(err, __jade[0].filename, __jade[0].lineno);
    }
  };
});