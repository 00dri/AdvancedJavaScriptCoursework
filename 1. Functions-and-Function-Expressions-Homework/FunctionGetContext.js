function testContext(){
	console.log(this);
}

function fromDifferentScope(){
	testContext();
}

var objTest = new testContext();

console.log(testContext());
console.log(fromDifferentScope());
//console.log(objTest);