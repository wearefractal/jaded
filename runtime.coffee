###
 Jade - runtime
 Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 MIT Licensed

 Converted to coffee-script and modified by Contra
 This runtime isn't required by jaded and doesn't provide any extra features besides fixing rethrow
###

nulls = (val) -> val?
Array.isArray ?= (arr) ->  Object::toString.call(arr) is "[object Array]"
Object.keys ?= (obj) -> (k for k of own obj)

window.jade =
  merge: (a, b) ->
    ac = a["class"]
    bc = b["class"]
    if ac or bc
      ac ?= []
      bc ?= []
      ac = [ac] unless Array.isArray ac
      bc = [bc] unless Array.isArray bc
      ac = ac.filter nulls
      bc = bc.filter nulls
      a["class"] = ac.concat(bc).join " "
    a[k] = b[k] for k of b when k isnt "class"
    return a

  attrs: (obj, escaped) ->
    buf = []
    terse = obj.terse
    delete obj.terse

    keys = Object.keys obj
    if keys.length
      buf.push ""
      for k,v of obj
        if typeof val is "boolean" or val is null
          buf.push (if terse then key else "#{key}=\"#{key}\"") if val
        else if key.indexOf("data") is 0 and typeof val isnt "string"
          buf.push "#{key}='#{JSON.stringify(val)}'"
        else if key is "class" and Array.isArray val
          buf.push "#{key}=\"#{jade.escape(val.join(' '))}\""
        else if escaped and escaped[key]
          buf.push "#{key}=\"#{jade.escape(val)}\""
        else
          buf.push "#{key}=\"#{val}\""
    return buf.join " "

  escape: (html) ->
    String(html).replace(/&(?!(\w+|\#\d+);)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace /"/g, "&quot;"

  rethrow: (err, filename, lineno) ->
    throw err unless filename
    err.path = filename
    err.message = (filename or "Jade") + ":" + lineno + "\n\n" + err.message
    throw err