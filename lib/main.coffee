jade = require 'jade'
{parser, uglify} = require 'uglify-js'

module.exports =
  minify: (code) -> uglify.gen_code uglify.ast_squeeze uglify.ast_mangle parser.parse code
  beautify: (code, indent=2) -> uglify.gen_code parser.parse(code), beautify: true, indent_level: indent
  compile: (contents, opt={}) ->
    opt.development ?= false
    opt.amd ?= false
    contents = String contents # for buffers

    # Jade compile to function string
    opts =
      client: true
      compileDebug: opt.development
    src = String jade.compile contents, opts

    # Wrap in amd closure
    #src = "define(['jade'], function(jade) {return #{src};});" if opt.amd
    src = "define(function(jade) {return #{src};});" if opt.amd
    src = (if opt.development then module.exports.beautify(src) else module.exports.minify(src))
    return src