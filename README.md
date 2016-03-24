# leftpad-sdk

We were all saddened and shocked by the sudden disappearance of the `left-pad` NPM module. We were lost and unable to left-pad our strings, until one adventurous person decided to develop a RESTful API to offer that same functionality under a revolutionary new technology called SMaaS (String Manipulation as a Service). Believe you me, this is going to be bigger than The Cloud. You can read more about it on its site: http://left-pad.io/

The thing is, using APIs is hard as we all know so I decided to implement this helpful library to ease the burdens of remote string padding. To ensure backwards compatibility with the original `left-pad` this module has been developed in exactly 11 lines of code. That seems to be the most crucial point to come across when reading all the articles written about it.

Here's how to use it:

```javascript
var leftpad = require("leftpad-sdk")

leftpad("foo bar", 20, "#", function(ret) { console.log(ret.body.str) })
```

This will print `#############foo bar`.

Do you want to avoid passing callbacks and prefer to use promises instead? Of course you do, and this handy module has got you covered:

```javascript
var leftpad = require("leftpad-sdk")

var promise = leftpad("hello world", 20, "#")
promise.then(function(ret) { console.log(ret.body.str) })
```
similarly to the previous example, this will print `#########hello world`.

That's all.
