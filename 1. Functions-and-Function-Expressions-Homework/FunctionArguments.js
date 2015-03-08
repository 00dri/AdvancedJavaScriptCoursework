function printArgsInfo ()
{
	var i = 0;
	var count = printArgsInfo.arguments.length;
	
	for(i = 0; i < count; i+=1){
	console.log(printArgsInfo.arguments[i] + 
		" (" + typeof(printArgsInfo.arguments[i]) + ")")
	}
}
 printArgsInfo(1,2,3, true, "dsads", {name: "sajdjhdj",id: "dadas"}, [1,2,3], undefined, null);