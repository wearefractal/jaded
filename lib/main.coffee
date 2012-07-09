jade = require 'jade'
rivets = require './rivets'
{parser, uglify} = require 'uglify-js'

jade.nodes.Tag::__proto__.setAttribute = (name, val, escaped) ->
  if name in rivets.routines() and matches = val.match /!\{([^}]+)\}/
    val = "\"#{matches[1]}\""
    name = "data-#{name}"
  @attrs.push
    name: name
    val: val
    escaped: escaped
  return @

module.exports =
  minify: (code) -> uglify.gen_code uglify.ast_squeeze uglify.ast_mangle parser.parse code
  beautify: (code, indent=2) -> uglify.gen_code parser.parse(code), beautify: true, indent_level: indent
  compile: (contents, opt={}) ->
    opt.development ?= false
    contents = String contents # for buffers

    # Jade compile to function string
    opts =
      client: true
      compileDebug: opt.development
      filename: opt.filename
    src = String jade.compile contents, opts

    # Wrap in amd closure
    src = "define(['#{opt.amd}'], function(jade) {return #{src};});" if opt.amd?
    src = (if opt.development then module.exports.beautify(src) else module.exports.minify(src))
    return src
