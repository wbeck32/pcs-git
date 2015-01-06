//studentGroup.js

var joe = {
		fName: "Joe",
		lName: "Jones",
		city: "Portland",
		state: "Oregon"

};

var jolene = {
	fName: "Jolene",
	occupation: "Streetcar driver",
	faveColor: "red"
}

var larry = {
	lName: "Smith",
	faveColor: "orange",
	city: "Springfield",
	state: "unknown"
}

var students = [
	joe,
	jolene,
	larry
]

console.log();
students.forEach(function(student) {
	
	for(var prop in student)
	{
		console.log(prop + ": "+student[prop]);
	}
	console.log();
});