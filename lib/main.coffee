{parser, uglify} = require 'uglify-js'

jade = require './hook'
processors = require './processors'

module.exports =
  minify: (code) -> uglify.gen_code uglify.ast_squeeze uglify.ast_mangle parser.parse code
  beautify: (code, indent=2) -> uglify.gen_code parser.parse(code), beautify: true, indent_level: indent
  compile: (contents, opt={}) ->
    opt.development ?= false
    opt.rivets ?= false
    opt.amd ?= false

    # Jade compile to function string
    jopts =
      filename: opt.filename
      compileDebug: opt.development
    contents = String contents # for fs buffers
    src = String jade.compileClient contents, jopts

    if opt.rivets # wrap with rivets convenience function
      src = """
      function anonymous (target, o, op){\r\n
        if (!op){op='html';}
        return rivets.bind($(target)[op](#{src}(o))[0], o);\r\n
      }
      """

    # Wrap in amd closure
    src = "define(function() {return #{src};});" if opt.amd is true
    src = (if opt.development then module.exports.beautify(src) else module.exports.minify(src))
    return src
