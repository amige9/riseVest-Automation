const { LoginPage } = require('../pageObject/LoginPage');
const { PlanPage } = require('./PlanPage');
const { WalletPage } = require('./WalletPage');


class POManager {
    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(this.page);
        this.walletPage = new WalletPage(this.page);
        this.planPage = new PlanPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getWalletPage(){
        return this.walletPage;
    }

    getPlanPage(){
        return this.planPage;
    }

 
}

module.exports = { POManager };