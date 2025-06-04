function converter() {
    const input = require('sync-input');
    console.log("Welcome to Currency Converter!");

    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
        RWF: 9.86,
        NRA: 1200,
        SHL: 2900
    };

    while (true) {
        let currency_from = input("What do you want to convert from (or type 'exit' to quit): ").toUpperCase();

        if (currency_from === "EXIT") {
            console.log("Goodbye!");
            break;
        }

        let currency_to = input("What do you want to convert to: ").toUpperCase();
        let amount = Number(input("Enter the amount: "));

        if (currencies[currency_from] && currencies[currency_to]) {
            let conv = (amount * currencies[currency_to]) / currencies[currency_from];
            console.log(`Amount: ${conv.toFixed(4)} ${currency_to}`);
        } else {
            console.log("Currency not found!");
        }
    }
}

converter();
