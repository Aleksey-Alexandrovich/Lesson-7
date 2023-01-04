

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (allCashbox) => {
	let average = 0;
	if(allCashbox.length > 0) {
		let summary = 0;
		for(let i = 0; i < allCashbox.length; i++) {
			summary += allCashbox[i];
		}
		average = Math.floor(summary / allCashbox.length);

	}         
	
	return average
}

console.log(getAverageValue(allCashbox));




