function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: function() {
        console.log("dame comida");
    },
    describe: function() {
        console.log("Mi nombre es " + this.name);
    }
};