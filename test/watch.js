if (!Object.prototype.watch) {
    Object.prototype.watch = function (prop, handler) {
        var oldval = this[prop], newval = oldval,
        getter = function () {
            return newval;
        },
        setter = function (val) {
            oldval = newval;
            return newval = handler.call(this, prop, oldval, val);
        };
        if (delete this[prop]) { // can't watch constants
            if (Object.defineProperty) // ECMAScript 5
                Object.defineProperty(this, prop, {
                    get: getter,
                    set: setter
                });
            else if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) { // legacy
                Object.prototype.__defineGetter__.call(this, prop, getter);
                Object.prototype.__defineSetter__.call(this, prop, setter);
            }
        }
    };
}

if (!Object.prototype.unwatch) {
    Object.prototype.unwatch = function (prop) {
        var val = this[prop];
        delete this[prop]; // remove accessors
        this[prop] = val;
    };
}

var nestObj = function(obj, keypath) {
    var ref = keypath.split('.');
    var last = ref.pop();
    for (var i = 0; i < ref.length; i++) {
      var k = ref[i];
      obj = obj[k];
    }
    return {result: obj, prop: last};
};
rivets.configure({
    adapter: {
      subscribe: function(obj, keypath, callback) {
        var res = nestObj(obj, keypath);
        res.result.watch(res.prop, function(prop, oldval, newval){
          callback(newval);
          return newval;
        });
      },
      read: function(obj, keypath) {
        var res = nestObj(obj, keypath);
        return res.result[res.prop];
      },
      publish: function(obj, keypath, value) {
        var res = nestObj(obj, keypath);
        res.result[res.prop] = value;
      }
    }
});

rivets.configure({
    formatters: {
      currency: function(value){
        return accounting.formatMoney(value);
      },
      seconds: function(value){
        return value + " seconds";
      }
    }
  });