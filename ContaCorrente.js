export class ContaCorrente{
    agencia;
    numeroConta;
    cliente;

    #_saldo // Atributo privado

    set saldo(valorSaldo){
        this.#_saldo = valorSaldo;
    }


    sacar(valor){
        if(this.#_saldo >= valor){
            this.#_saldo -= valor;
            console.log(`Valor Sacado: ${valor.toFixed(2)}\nSaldo: ${this.#_saldo.toFixed(2)}`);
            return valor;
        }else{
            console.log(`Não foi possível sacar R$ ${valor.toFixed(2)}\nSaldo: ${this.#_saldo.toFixed(2)}`);
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#_saldo += valor;
            console.log(`Depósito: ${valor.toFixed(2)}`);
        }else{
            console.log(`Depósito R$ ${valor} Inválido!!`);
        }
    }

}