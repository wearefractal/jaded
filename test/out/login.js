define([ "jade" ], function(jade) {
  return function anonymous(target, o, op) {
    if (!op) {
      op = "html";
    }
    var el = $(target)[op](function anonymous(locals, attrs, escape, rethrow, merge) {
      attrs = attrs || jade.attrs;
      escape = escape || jade.escape;
      rethrow = rethrow || jade.rethrow;
      merge = merge || jade.merge;
      var __jade = [ {
        lineno: 1,
        filename: undefined
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
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push("<div>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push("<h3>");
          __jade.unshift({
            lineno: undefined,
            filename: __jade[0].filename
          });
          __jade.unshift({
            lineno: 2,
            filename: __jade[0].filename
          });
          buf.push("" + escape((interp = title) == null ? "" : interp) + "");
          __jade.shift();
          __jade.shift();
          buf.push("</h3>");
          __jade.shift();
          __jade.unshift({
            lineno: 3,
            filename: __jade[0].filename
          });
          buf.push("<input");
          buf.push(attrs({
            type: "text",
            name: "username",
            placeholder: "" + placeholder + "",
            "data-show": "shown"
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
        }
        return buf.join("");
      } catch (err) {
        rethrow(err, __jade[0].filename, __jade[0].lineno);
      }
    }(o));
    rivets.bind(el[0], o);
    return el;
  };
});