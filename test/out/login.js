define(function(jade) {
  return function anonymous(locals, attrs, escape, rethrow) {
    var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
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
          lineno: 1,
          filename: __jade[0].filename
        });
        buf.push("<div");
        buf.push(attrs({
          "class": "modal" + " " + "in"
        }));
        buf.push(">");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 2,
          filename: __jade[0].filename
        });
        buf.push("<form");
        buf.push(attrs({
          id: "login"
        }));
        buf.push(">");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 3,
          filename: __jade[0].filename
        });
        buf.push("<div");
        buf.push(attrs({
          "class": "modal-header"
        }));
        buf.push(">");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 4,
          filename: __jade[0].filename
        });
        buf.push("<h3>Login");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.shift();
        buf.push("</h3>");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.unshift({
          lineno: 5,
          filename: __jade[0].filename
        });
        buf.push("<div");
        buf.push(attrs({
          "class": "modal-body"
        }));
        buf.push(">");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 6,
          filename: __jade[0].filename
        });
        buf.push("<div");
        buf.push(attrs({
          "class": "alert" + " " + "alert-error" + " " + "hide"
        }));
        buf.push(">");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.unshift({
          lineno: 7,
          filename: __jade[0].filename
        });
        buf.push("<input");
        buf.push(attrs({
          type: "text",
          name: "username",
          placeholder: "Username",
          "class": "span7"
        }));
        buf.push("/>");
        __jade.shift();
        __jade.unshift({
          lineno: 8,
          filename: __jade[0].filename
        });
        buf.push("<input");
        buf.push(attrs({
          type: "password",
          name: "password",
          placeholder: "Password",
          "class": "span7"
        }));
        buf.push("/>");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.unshift({
          lineno: 9,
          filename: __jade[0].filename
        });
        buf.push("<div");
        buf.push(attrs({
          "class": "modal-footer"
        }));
        buf.push(">");
        __jade.unshift({
          lineno: undefined,
          filename: __jade[0].filename
        });
        __jade.unshift({
          lineno: 10,
          filename: __jade[0].filename
        });
        buf.push("<input");
        buf.push(attrs({
          type: "submit",
          value: "Login",
          "class": "btn" + " " + "btn-primary"
        }));
        buf.push("/>");
        __jade.shift();
        __jade.shift();
        buf.push("</div>");
        __jade.shift();
        __jade.shift();
        buf.push("</form>");
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