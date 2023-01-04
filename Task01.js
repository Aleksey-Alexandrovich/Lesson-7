
const allStudents = ['Egorov','Petrov','Sokolov','Sidorov','Popov','Ivanov'];

const failedStudents = ['Petrov', 'Popov','Ivanov'];


const filter = (allStudents,failedStudents) => {
	const successfulStudents = [];
	for(const student of allStudents) {
		if(!failedStudents.includes(student)) {
			successfulStudents.push(student);
		}
	}
	return successfulStudents;
}

console.log(filter(allStudents,failedStudents));  

