export class ContaCorrente{
    agencia;
    numeroConta;
    cliente;

    _saldo;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log(`Valor Sacado: ${valor.toFixed(2)}\nSaldo: ${this._saldo.toFixed(2)}`);
        }else{
            console.log(`Não foi possível sacar R$ ${valor.toFixed(2)}\nSaldo: ${this._saldo.toFixed(2)}`);
        }
    }

}