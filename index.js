const consoleFrog = (log) => {
  const stringified = typeof log === "string" ? log : JSON.stringify(log);

  const length = stringified ? stringified.length : log.length;
  const border = "-".repeat(length + 4);
  console.log(`                            ${border}
                           |  ${stringified? stringified : log}  |
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