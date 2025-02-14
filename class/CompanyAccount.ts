import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    this.validateStatus();

    this.setBalance(this.getBalance() + value);
    console.log(`Empréstimo feito com sucesso!, o novo saldo é de: R$ ${this.getBalance()}`);
  }
}
