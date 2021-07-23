const babel = require('@babel/core');
const result = babel.transform("const = () => 1;",{});

console.log(result);