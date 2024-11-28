// Strategy pattern

// Calculating shipping costs
function Fedex() {
    this.calculate = package=>{
        // Fedex calculations....
        return 2.45
    }
}

function UPS() {
    this.calculate = package=>{
        // UPS calculations....
        return 1.56
    }
}

function DHL() {
    this.calculate = package=>{
        // DHL calculations....
        return 3.45
    }
}

function USPS() {
    this.calculate = package=>{
        // USPS calculations....
        return 4.45
    }
}

function Shipping() {
    this.company = ""
    this.setStrategy = (company)=>{
        this.company = company
    }
    this.calculate = package=>{
        return this.company.calculate(package)
    }
}

const fedex = new Fedex()
const ups = new UPS()
const dhl = new DHL()
const usps = new USPS() 

const package = {from: 'Alabama', to: 'New York', weight: 2.5}

// fedex.calculate(package)
// ups.calculate(package)
// dhl.calculate(package)
// usps.calculate(package)

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(package))

shipping.setStrategy(ups)
console.log("UPS: " + shipping.calculate(package))

shipping.setStrategy(dhl)
console.log("DHL: " + shipping.calculate(package))

shipping.setStrategy(usps)
console.log("USPS: " + shipping.calculate(package))