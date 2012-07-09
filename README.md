## Information

<table>
<tr> 
<td>Package</td><td>jaded</td>
</tr>
<tr>
<td>Description</td>
<td>Collection of Jade plugins</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

## Installation

```
sudo npm install jaded -g
```

## Usage

```
  Usage: jaded [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -i --input [folder]   Specify input folder
    -o --output [folder]  Specify output folder
    -d --development      Beautify output
    -a --amd              Wrap output in AMD closure
    -r --rivets           Add rivets bindings via ${}

```

### Rivets

Use ${} where you would usually use #{} to watch the object for changes. The template function now takes two arguments - a selector for where the template will be rendered ("#content") and a locals object.

```coffeescript
#auction
  h1 ${auction.title}
  img(src='${auction.image_url}')
  br
  span ${auction.timeRemaining | time}

  .alert-box(show='${auction.endingSoon}')
    p Hurry up! This auction is ending soon.

  dl
    dt Highest Bid:
    dd ${auction.bid | currency}
    dt Bidder:
    dd ${auction.bidder}
```

compiles to

```html
<div id="auction">
   <h1 data-text="auction.title"></h1>
   <img data-src="auction.image_url" />
   <br />
   <span data-text="auction.timeRemaining | time"></span>
   <div data-show="auction.endingSoon" class="alert-box">
      <p>Hurry up! This auction is ending soon.</p>
   </div>
   <dl>
      <dt>Highest Bid:</dt>
      <dd data-text="auction.bid | currency"></dd>
      <dt>Bidder:</dt>
      <dd data-text="auction.bidder"></dd>
   </dl>
</div>
```

## Middleware

jaded modifies the jade package to allow processing through middleware - just specify the node type and a handler

```coffeescript
jade = require 'jade'
require 'jaded' # this will load the hooks

jade.use 'Tag', (node) ->
  # Do stuff to node here
  return node
```

## LICENSE

(MIT License)

Copyright (c) 2012 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
