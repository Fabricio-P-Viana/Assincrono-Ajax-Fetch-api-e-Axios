const nome = "Fabricio";
const sobrenome = "viana";
const idade = 30;

function soma(x, y) {
    return x+y;
}

//export e import
// pode exportar direto na variavel = export const idade = 30;
export{ nome, sobrenome, idade, soma };