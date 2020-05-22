class SavingAccount extends Account {
    AddCustomer() {
        return "new customer added";
    }
    removeCustomer() {
        return "Customer removed";
    }
    debitAmount(num) {
        return `debit ${num} into ${this.accountNumber}`;
    }
    creditAmount(num) {
        this.balance = this.balance - num;
        return `credit ${num} from ${this.accountNumber}`;
    }
    getBalance() {
        return this.balance;
    }
}
