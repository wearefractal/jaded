define([ "true" ], function(jade) {
  return function anonymous(locals, attrs, escape, rethrow, merge) {
    attrs = attrs || jade.attrs;
    escape = escape || jade.escape;
    rethrow = rethrow || jade.rethrow;
    merge = merge || jade.merge;
    var __jade = [ {
      lineno: 1,
      filename: "/home/contra/Projects/jaded/test/in/login.jade"
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
        buf.push('<div class="modal">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 2,
          filename: __jade[0].filename
        });
        buf.push('<div class="modal-header">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 3,
          filename: __jade[0].filename
        });
        buf.push("<h3>");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 3,
          filename: __jade[0].filename
        });
        buf.push("" + escape((interp = dude.title) == null ? "" : interp) + "");
        __jade.shift();
        __jade.shift();
        buf.push("</h3>");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.unshift({
          lineno: 4,
          filename: __jade[0].filename
        });
        buf.push('<div class="modal-body">');
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 5,
          filename: __jade[0].filename
        });
        buf.push("<input");
        buf.push(attrs({
          type: "text",
          name: "username",
          placeholder: "" + dude.placeholder + "",
          "data-show": "dude.shown",
          "class": "span7"
        }, {
          type: true,
          name: true,
          placeholder: true,
          "data-show": true
        }));
        buf.push("/>");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.shift();
      }
      return buf.join("");
    } catch (err) {
      rethrow(err, __jade[0].filename, __jade[0].lineno);
    }
  };
});