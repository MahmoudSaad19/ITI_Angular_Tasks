class SavingAccount extends Account implements IAccount {
    dateOfOpening: Date;
    minBalance: number;
    AddCustomer() {
        return "new customer added";
    }
    removeCustomer() {
        return "Customer removed";
    }

    debitAmount(num: number) {
        return `debit ${num} into ${this.accountNumber}`;
    }

    creditAmount(num: number) {
        this.balance = this.balance - num;
        return `credit ${num} from ${this.accountNumber}`;
    }

    getBalance(): number {
        return this.balance;
    }

}