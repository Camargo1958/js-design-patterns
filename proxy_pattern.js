// Proxy design pattern - One object as placeholder for another object that can be called in a different way
// Proxy can control access to the original object

// external API service
function CryptoCurrencyAPI() {
    this.getValue = function(coin) {
        console.log(`Getting ${coin} value...`)
        switch(coin) {
            case "Bitcoin":
                return "$8,500"
            case "Litecoin":
                return "$50"
            case "Ethereum":
                return "$175"   
        }
    }
}

// Calling API service

// const api = new CryptoCurrencyAPI()
// console.log(api.getValue("Bitcoin"))
// console.log(api.getValue("Litecoin"))
// console.log(api.getValue("Ethereum"))

// Proxy API service
function CryptoCurrencyProxy() {
    this.api = new CryptoCurrencyAPI()
    this.cache = {}

    this.getValue = function(coin) {
        console.log(`Getting ${coin} value from proxy...`)
        if(this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}


const proxy = new CryptoCurrencyProxy()
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Ethereum"))

console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Ethereum"))