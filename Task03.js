
const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = (names) => {
	const prefixName = [];
	for(let i = 0; i < names.length; i++) {
		prefixName[i] = 'Mr ' + names[i];
	}
	return prefixName;
}

console.log(addPrefix(names));