function Subtractor(input1, input2) {

this.input1 = input1;
this.input2 = input2;
}

Subtractor.prototype.Subtractor = function() {
    return this.input1 - this.input2
}

module.exports = Subtractor;