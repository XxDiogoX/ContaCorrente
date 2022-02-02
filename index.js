import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"




const cliente1 = new Cliente("Diogo Rodrigues", "416.730.258-62");
const cliente2 = new Cliente("Natalie Rodrigues", "552.639.789-40");

const conta1 = new ContaCorrente(3574, 964501, cliente1);
const conta2 = new ContaCorrente(9537,111111, cliente2);
const conta3 = new ContaCorrente(3574, 964501, cliente1);
const conta4 = new ContaCorrente(3574, 964501, cliente1);
const conta5 = new ContaCorrente(3574, 964501, cliente1);
const conta6 = new ContaCorrente(3574, 964501, cliente1);
const conta7 = new ContaCorrente(3574, 964501, cliente1);
const conta8 = new ContaCorrente(3574, 964501, cliente1);
const conta9 = new ContaCorrente(3574, 964501, cliente1);


console.log(conta1, conta1.cliente);
console.log(conta2, conta2.cliente);


console.log("Número de conta: " + ContaCorrente.numeroDeConta);

