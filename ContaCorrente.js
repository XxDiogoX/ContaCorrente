export class ContaCorrente{
    agencia;
    numeroConta;
    cliente;

    #_saldo // Atributo privado

    set saldo(valorSaldo){
        this.#_saldo = valorSaldo;
    }

    mostrarSaldo(){
        console.log("----------- Saldo -------------");
        console.log(`Titular: ${this.cliente.nome}\nSaldo: R$ ${this.#_saldo.toFixed(2)}`);
        console.log("-------------------------------");
    }


    sacar(valor){
        if(this.#_saldo >= valor){
            this.#_saldo -= valor;
            console.log(`Valor Sacado: R$ ${valor.toFixed(2)}\nSaldo: R$ ${this.#_saldo.toFixed(2)}`);
            return valor;
        }else{
            console.log(`Não foi possível sacar R$ ${valor.toFixed(2)}\nSaldo: R$ ${this.#_saldo.toFixed(2)}`);
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#_saldo += valor;
            console.log(`Depósito: R$ ${valor.toFixed(2)}`);
        }else{
            console.log(`Depósito: R$ ${valor} Inválido!!`);
        }
    }

    transferir(valor,conta){
        if(this.#_saldo >= valor && conta instanceof ContaCorrente){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
            console.log(`R$ ${valorSacado.toFixed(2)} transferido para ${conta.cliente.nome}`);
        }else{
            console.log("Não foi possível transferir!!");
        }

    }

}