//import para pegar
// export para definir quais variaveis ou funções quero exportar
// importa tudo = import * as MeuModulo from ......
import{nome as nome2, sobrenome, idade, soma} from "./modulo1";
// AS renomeia as varias importadas
// export default define uma variavel padrão que não precisa ser colocada em chaves no import
// import Qualquercoisa from "arquivo.."

console.log(nome2, sobrenome, idade);

console.log(soma(5,5));
