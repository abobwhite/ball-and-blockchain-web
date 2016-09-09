var Web3 = require('web3');

class PolicySvc {
    private $rootScope: ng.IRootScopeService;
    private $web3: any;
    private $policyContract: any;

    /** @ngInject */
    constructor($rootScope: ng.IRootScopeService) {
        this.$rootScope = $rootScope;
        // CONFIG.eth.provider
        this.$web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

        this.$web3.eth.defaultAccount=this.$web3.eth.accounts[0];

        const abi = [{"constant":true,"inputs":[],"name":"ended","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"bid","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_disclosures","type":"bytes32"}],"name":"createPolicy","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"cancelBid","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"targetBidder","type":"address"}],"name":"accept","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_disclosures","type":"bytes32"}],"name":"getPolicy","outputs":[{"name":"disclosures","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"getBids","outputs":[{"name":"bidder","type":"address[]"},{"name":"value","type":"uint256[]"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"CanceledBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"Accepted","type":"event"}];
        const address = '0x15c38c9539ecb15dc49b7872e0a2f72c0f3ef4a3';

        this.$policyContract = this.$web3.eth.contract(abi).at(address);
    }

    promiseWrapper(method, args){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                try {
                    resolve(this.$policyContract[method].apply(null, args));
                } catch(err) {
                    reject(err);
                }
            }, 1);
        });
    }

    createPolicy(disclosure: string) {
        return this.promiseWrapper("createPolicy", [disclosure]);
    }

    getPolicy() {
        return this.promiseWrapper("getPolicy", []);
    }

    bid(value: number) {
        //this.$web3.eth.defaultAccount=this.$web3.eth.accounts[1];
        return this.promiseWrapper("bid", [value]);
    }

    cancelBid() {
        return this.promiseWrapper("cancelBid", []);
    }

    getBids() {
        return this.promiseWrapper("getBids", []).then(result => {
            return result[0].map((item, index)=>{
                return {
                    bidder: result[0][index],
                    value: this.$web3.toDecimal(result[1][index])
                };
            });
        });
    }

    accept(address: string) {
        return this.$policyContract.accept(address);
    }
}

export default PolicySvc;
