Are you sick of debugging? [sausage-console-dog]("https://github.com/MaoShizhong/sausage-console-dog/") just not doing it for you anymore?

Introducing the definitive console logger for the modern era: console-frog!

# Install

```sh
npm i console-frog
```

# Usage

```js
// CJS
require('console-frog');

// ESM
import 'console-frog';
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
See [LICENSE](./LICENSE)
```