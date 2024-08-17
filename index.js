const consoleFrog = (log) => {
  const length = log.length;
  const border = "-".repeat(length + 4);
  console.log(`                            ${border}
                           |  ${log}  |
                            ${border}
                            /     `);
  console.log(`               .--._.--.   /
              ( O     O ) /  
              /   . .   \\
             .\`._______.\`.
            /(           )\\
          _/  \\  \\   /  /  \\_
       .~   \`  \\  \\ /  /  '   ~.
      {    -.   \\  V  /   .-    }
 _ _\`.    \\  |  |  |  /    .'_ _
    >_       _} |  |  | {_       _<
     /. - ~ ,_-'  .^.  \`-_, ~ - .\\
             '-'|/   \\|\'-\'`);
}

console.frog = consoleFrog;

console.frog("Hello, World!");