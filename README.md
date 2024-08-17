![A sad frog meme with the caption "MFW I REALISE JS DOESN'T HAVE A NATIVE CONSOLE.FROG METHOD"](./frog-console.jpeg)

Are you sick of debugging with a million boring console.logs? [sausage-console-dog](https://github.com/MaoShizhong/sausage-console-dog/) just not doing it for you anymore?

Introducing the definitive console logger for the modern era: console-frog-plus-plus!


# Install

```sh
npm i console-frog-plus-plus
```

# Usage

```js
// CJS
require('console-frog-plus-plus');

// ESM
import 'console-frog-plus-plus';
```

## Example

```js
console.frog('Hello, world!');
```

## Output:

```
                            -----------------
                           |  Hello, world!  |
                            -----------------
                            /     
               .--._.--.   /
              ( O     O ) /  
              /   . .   \
             .`._______.`.
            /(           )\
          _/  \  \   /  /  \_
       .~   `  \  \ /  /  '   ~.
      {    -.   \  V  /   .-    }
    _ _`.    \  |  |  |  /    .'_ _
    >_       _} |  |  | {_       _<
     /. - ~ ,_-'  .^.  `-_, ~ - .\
             '-'|/   \|'-'
```

# Notes
If you try to log something over some length I didn't bother to calculate
and which will depend on your console width, this will not work as expected.
I have no plans to fix that. Feel free to submit a PR if it bothers you.

Ribbit! 🐸

# Acknowledgements

- To https://github.com/MaoShizhong for the idea
- To an unknown artist at https://www.asciiart.eu/animals/frogs for the ASCII art

# License
See [LICENSE](./LICENSE.md)
