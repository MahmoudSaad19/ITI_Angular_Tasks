class CurrentAccount extends Account implements IAccount {
    dateOfOpening: Date;
    interestRate: number;
    /**
     *
     */
    constructor(an, bal, date, ir) {
        super(an, bal);
        this.dateOfOpening = date;
        this.interestRate = ir;
    }
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