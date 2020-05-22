abstract class Account {
    accountNumber: number;
    balance: number;
    /**
     *
     */
    constructor(an, ba) {
        this.accountNumber = an;
        this.balance = ba;
    }

    abstract debitAmount(num: number);

    abstract creditAmount(num: number);

    abstract getBalance();
}

