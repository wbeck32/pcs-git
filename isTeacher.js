//isTeacher.js

var areTheyTeachers = {
	Dan: true,
	Andrew: true,
	Larry: false,
	"Hamster Man": false
};

for(var names in areTheyTeachers) {
	teacherQ();
	ifTeacher();
	oneLine();
	console.log();
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
	return ifTeacher(areTheyTeachers[names]);
}
