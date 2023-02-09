class Wallet {

    current() {
        //display current balance of ROVR coin wallet
        throw new Error('Insufficient funds');
    }

    rate() {
        //Display the exchange rate of ROVR coin against £ 
        throw new Error ('Not supported yet');
    }


    add() {
        //add number to current balance. Prompt the user on how many coins to add.
        //The add must be parsed to a minimum value that they can add to the wallet
        throw new Error ('Minimum Deposit: ');
    }
}

module.exports = Wallet;