class CurrentAccount extends Account {
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
