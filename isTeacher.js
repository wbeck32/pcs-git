//isTeacher.js

var areTheyTeachers = {
	Dan: true,
	Andrew: true,
	Larry: false,
	"Hamster Man": false
};

for(var names in areTheyTeachers) {
	console.log();
	teacherQ();
	ifTeacher();
	oneLine();
	oneLineV2();
	console.log(oneLineV2());

}


//Example 1
function teacherQ(){
	if (areTheyTeachers[names] === true){
		console.log(names+" "+areTheyTeachers[names]);
	}
}

//Example 2
function ifTeacher() {
if(names === "Dan" || names === "Andrew") {
	console.log(names+" is a teacher!");
	return true;
} else {
	return false;
	}
}

//Example 3
function oneLine() {
	return areTheyTeachers[names] === true ? console.log(names+': yep!') : console.log(names+': nope!');
}

function oneLineV2() {
	return names === "Dan" || names === "Andrew";
}

