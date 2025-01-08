export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (value: number): void => {
    this.balance = value
    console.log('Nome alterado com sucesso!')
  }

  getBalance = (): number => {
    return this.balance;
  }

  deposit = (value: number): void => {
    this.validateStatus();

    this.balance += value;
    console.log(`Deposito feito com sucesso!, o novo saldo é de: R$ ${this.balance}`);
  }

  withdraw = (value: number): void => {
    this.validateStatus();

    if (value > this.balance)
    {
      console.log('Não foi possível realizar o saque, verifique o saldo da conta');
      return;
    }

    this.balance -= value;
    console.log(`Saque feito com sucesso!, o novo saldo é de: R$ ${this.balance}`);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
