import { DioAccount } from "./DioAccount"

export class InvestorAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    this.validateStatus();

    this.setBalance(this.getBalance() + Math.floor(value * 1.1));
    console.log(`Deposito feito com sucesso!, o novo saldo é de: R$ ${this.getBalance()}`);
  }
}