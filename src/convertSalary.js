function convertSalary() {
    return fetch('http://api.currencylayer.com/live?access_key=7915b4be962c15a4b92cc38921fc2662&format=1').then(function(response) {
        return response.json();
    }).then(function (result) {
            return result;
        });
};

let currencyRate = [];

convertSalary().then(function (result) {
    currencyRate.currency = result.quotes.USDEUR;
});

function getSalary(salary) {
    return Math.round(salary * currencyRate.currency);
}

export {getSalary};