import { CompanyAccount } from './class/CompanyAccount'
import { InvestorAccount } from './class/InvestorAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.withdraw(11);
peopleAccount.withdraw(9);
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount);
companyAccount.deposit(100)
companyAccount.withdraw(110);
companyAccount.withdraw(90);
companyAccount.getBalance();
companyAccount.getLoan(900);
console.log(companyAccount.getBalance());

const investorAccount: InvestorAccount = new InvestorAccount('DIO', 20)
console.log(investorAccount);
investorAccount.deposit(100)
investorAccount.withdraw(110);
investorAccount.deposit(100)
investorAccount.withdraw(150);
console.log(investorAccount.getBalance());
