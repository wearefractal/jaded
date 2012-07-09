{nodes} = jade = require 'jade'

rvinter = /\$\{([^}]+)\}/

# interpolate text subnodes
jade.use 'Tag', (node) ->
  for subnode, idx in node.block.nodes
    if subnode instanceof nodes.Text and matches = subnode.val.match rvinter
      node.setAttribute 'data-text', "'#{matches[1]}'", true
      node.block.nodes.splice idx, 1
  return node

# interpolate attributes
jade.use 'Tag', (node) ->
  for attr, idx in node.attrs
    if matches = attr.val.match rvinter
      node.setAttribute "data-#{attr.name}", "'#{matches[1]}'", true
      node.attrs.splice idx, 1
  return node