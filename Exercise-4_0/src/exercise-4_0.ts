
//1. Task: Create an Atm class that allows a user to authenticate, logout, check his/her balance, get money, add money 
//   to their account.  The Atm class should internally use an instance of an Account class and an instance of a Bank
//   class that stores a list of all accounts. 
//   
//   You will use the browser console to test your atm.  You will need to log write console messages using console.log()
//   console.error();
//
//   Instantiate an instance of the atm in the code here so that it is available in your browser console. 

class Account {
    constructor(
        public username: string,
        public password: string,
        public balance: number
    ) {}

    addFunds(funds: number) {
        this.balance += +funds;
    }

    getBalance(): number {
        return this.balance;
    }

    removeFunds(requestedFunds: number): number {
        if (requestedFunds > this.balance) {
            throw "Insufficient Funds!";
        } else {
            this.balance -= requestedFunds;
            return requestedFunds;
        }
    }
}

class Bank {
    constructor(private accounts: Account[]) {}

    getAccount(username, pass) {
        return this.accounts.filter((acct) => acct.username === username && acct.password === pass )[0];
    }
}


class Atm {

    private ERROR_MESSAGE = "Error! You are not logged in!  The Police have been called!";
    private LOGGED_IN_MESSAGE = "You are now logged in. How can I help you?";
    private LOGGED_OUT_MESSAGE = "You have sucessfully been logged out.";

    private activeAccount: Account;

    constructor(
        private bank: Bank
    ) {}

    addMoney(money: number) {
        this.activeAccount && this.activeAccount.addFunds(money);
    }

    authenticate(username, password) {
        let account = this.bank.getAccount(username, password);
        
        if (account) {
            this.activeAccount = account;
            return this.LOGGED_IN_MESSAGE;
        } else {
            return this.ERROR_MESSAGE;
        }
    }

    checkBalance(): number|string {
        return this.activeAccount ? this.activeAccount.getBalance() : this.ERROR_MESSAGE;
    }

    getMoney(money: number) {
        this.activeAccount && this.activeAccount.removeFunds(money);
    }

    logout() {
        this.activeAccount = null;
        return this.LOGGED_OUT_MESSAGE;
    }
}

var jasonAccount = new Account('Jason', '12345', 100);
var friendlyBank = new Bank([jasonAccount]);

var atm = new Atm(friendlyBank);

