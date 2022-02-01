import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const conta1 = new ContaCorrente();
const cli1 = new Cliente();
cli1.nome = "Diogo Rodrigues";

conta1._saldo = 500;
conta1.agencia = 3574;
conta1.numeroConta = 96452;
conta1.cliente = cli1.nome;

console.log(conta1);

conta1.sacar(200);