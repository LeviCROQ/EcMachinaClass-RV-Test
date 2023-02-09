const prompt = require('prompt-sync')();

class Wallet {
    constructor() {
        this.balance = 0;
        this.exchangeRate = 0.02
    }

    current() {
        //display current balance of ROVR coin wallet
        console.log(`Current balance = ${this.balance}`);
        // throw new Error('Insufficient funds');
    }

    rate() {
        //Display the exchange rate of ROVR coin against £ 
        console.log(`One RO_VR coin = £${this.exchangeRate}`);
        // throw new Error ('Not supported yet');
    }


    add() {
        //add number to current balance. Prompt the user on how many coins to add.
        //The add must be parsed to a minimum value that they can add to the wallet
        let response = '';
        let amount = 0;
        let input = '';

        while(input != 'NO') {
            input = prompt('Do you want to deposit? YES or NO: ')
            input = input.toUpperCase();
            if(input == 'YES') {
                response = prompt('Deposit amount of RO_VR: ')
                amount = Number(response);
                if(amount >= 20) {
                    this.balance += amount
                    console.log(`Your new balance = ${this.balance} RO_VR Coin`)
                    input = 'NO';
                    console.log('You have now been logged out for security reasons')
                } else {
                    console.log('Minimum deposit is 20 RO_VR')
                } 
            }     
        }
       
        


        
        // throw new Error ('Minimum Deposit: ');
    }
}

module.exports = Wallet;