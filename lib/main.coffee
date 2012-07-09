{parser, uglify} = require 'uglify-js'

jade = require './hook'
processors = require './processors'

module.exports =
  minify: (code) -> uglify.gen_code uglify.ast_squeeze uglify.ast_mangle parser.parse code
  beautify: (code, indent=2) -> uglify.gen_code parser.parse(code), beautify: true, indent_level: indent
  compile: (contents, opt={}) ->
    opt.development ?= false
    opt.rivets ?= true
    opt.amd = 'jade' if opt.amd is true

    # Jade compile to function string
    contents = String contents # for fs buffers
    src = String jade.compile contents, client: true

    if opt.rivets # wrap with rivets conveience function
      src = """
      function anonymous (target, o, op){\r\n
        if (!op){op='html';}
        return rivets.bind($(target)[op](#{src}(o))[0], o);\r\n
      }
      """

    # Wrap in amd closure
    src = "define(['#{opt.amd}'], function(jade) {return #{src};});" if opt.amd?
    src = (if opt.development then module.exports.beautify(src) else module.exports.minify(src))
    return src
