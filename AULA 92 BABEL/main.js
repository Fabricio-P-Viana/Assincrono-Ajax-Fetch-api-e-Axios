// instalando babel um depurador que refaz codigos em versões mais novas ou antigas ( transpilador )
// https://babeljs.io/

// npm init -y
// npm install --save-dev @babel/cli @babel/preset-env @babel/core
// run babel
const nome = "fabricio";
const obj = {nome};
const novoObj = {...nome};
console.log(novoObj);