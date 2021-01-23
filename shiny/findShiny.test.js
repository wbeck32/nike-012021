
const compare = (element,index,array) =>{
	let comp = true;
	array.filter((item,idx)=>{
		if(array[idx+1] !== undefined) comp = array[idx]<=array[idx+1];
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

// tests
let shinyArray = []
beforeEach(() =>{
	shinyArray = []
})

test('shiny => 499',()=>{
	shinyArray = findShiny(499)
	expect(shinyArray).toHaveLength(100)
	expect(shinyArray[0]).toBe(499)

})

test('shiny => 111',()=>{
	shinyArray = findShiny(111)
	expect(shinyArray).toHaveLength(100)
	expect(shinyArray[0]).toBe(111)
})

test('shiny => 0',()=>{
	shinyArray = findShiny(0)
	expect(shinyArray).toHaveLength(100)
	expect(shinyArray[0]).toBe(0)
})

test('shiny => 246888',()=>{
	shinyArray = findShiny(24688)
	expect(shinyArray).toHaveLength(100)
	expect(shinyArray[0]).toBe(24688)
})

test('notShiny => 1231',()=>{
	shinyArray = findShiny(1231)
	expect(shinyArray).toHaveLength(100)
	expect(shinyArray[0]).not.toBe(1231)
})

test('notShiny => 21',()=>{
	shinyArray = findShiny(21)
	expect(shinyArray).toHaveLength(100)
	expect(shinyArray[0]).not.toBe(21)
})

test('notShiny => 63',()=>{
	shinyArray = findShiny(63)
	expect(shinyArray).toHaveLength(100)
	expect(shinyArray[0]).not.toBe(63)
})