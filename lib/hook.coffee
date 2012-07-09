{nodes} = jade = require 'jade'

hook =
  stacks: {}
  use: (name, fn) -> 
    (hook.stacks[name]?=[]).push fn
    return hook

  process: (node) ->
    for k,v of nodes when k isnt 'Node' and node instanceof v
      return node unless hook.stacks[k]? and hook.stacks[k].length > 0
      node = middle node for middle in hook.stacks[k] when typeof middle is 'function'
      return node
    return node

  blockPush: (node) -> @nodes.push hook.process node

jade.use = hook.use
jade.nodes.Block::push = hook.blockPush
module.exports = jade