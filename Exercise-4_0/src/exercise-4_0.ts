
//1. Task: Create an Atm class that allows a user to authenticate, logout, check his/her balance, get money, add money 
//   to their account.  
//
//   You should create an Account class and a Bank class.  
//   The Account class should manage the concerns of the account by knowing the username and password, the current balance, 
//   and adding/removing funds to or from the balance.
//
//   The Bank class should maintain a list of accounts and have one method: getAccount which takes a user name and password
//   and searches returns an account if found.
//
//   Create an account and a bank in your code and instantiate and atm, passing in the bank instance.  Add a public api to 
//   your Atm class to accomplish the above tasks.  
//   Use the browser console to test your atm.
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

