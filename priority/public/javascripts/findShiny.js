
const compare = (element,index,array) =>{
	let comp = true
	array.filter((idx)=>{
		if(array[idx+1] !== undefined && comp !==false) comp = array[idx]<=array[idx+1];
	})	
	return comp
}

const findShiny = (num) =>{
	let numArray = [];
	let digArray = []
	for(let y = 0;y<1000;y++){
		digArray.push(Array.from(String(num+y),Number))
	}
	digArray.filter((dig,idx)=>{
		const com = dig.every(compare);
		(com === true && numArray.length<100) ? numArray.push(Number(dig.join(''))): numArray
	})
	return numArray
}

module.exports = findShiny