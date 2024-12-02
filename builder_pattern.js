// Builder Pattern - used to construct complex objects step by step

function Person(name, weight, height, gender) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
}

function PersonBuilder(name, gender) {
    this.name = name;
    this.gender = gender;
    
    this.setWeight = function(weight) {
        this.weight = weight;
        return this;
    }

    this.setHeight = function(height) {
        this.height = height;
        return this;
    }

    this.build = function() {
        return new Person(this.name, this.weight, this.height, this.gender);
    }
}

const person = new PersonBuilder('John Doe', 'male')
    .setHeight(180)
    .setWeight(80)
    .build();

console.log(person);

function Product(name, brand, parts) {
    this.name = name;
    this.brand = brand;
    this.parts = parts;
}

function ProductBuilder(name, brand) {
    this.name = name;
    this.brand = brand;
    this.parts = [];

    this.addPart = function(part) {
        this.parts.push(part);
        return this;
    }

    this.build = function() {
        return new Product(this.name, this.brand, this.parts);
    }
}

const product = new ProductBuilder('Laptop', 'Dell')
    .addPart('CPU')
    .addPart('RAM')
    .build();

console.log(product);

const product1 = new ProductBuilder('Tractor', 'John Deere')
    .addPart('motor')
    .addPart('typres')
    .addPart('wheels')
    .addPart('control center')
    .build();

    console.log(product1);