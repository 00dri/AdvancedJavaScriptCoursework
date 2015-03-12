function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getInfo = function(){
 return this.firstName + " " + this.lastName;
};

var person = new Person("Pesho", "Peshev");
console.log(person.getInfo());