var express = require('express');
var router = express.Router();
const {retrieveProducts} = require('../utils/localStorage')


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

// // tests
// let shinyArray = []
// beforeEach(() =>{
// 	shinyArray = []
// })

// test('499',()=>{
// 	shinyArray = findShiny(499)
// 	expect(shinyArray).toHaveLength(100)
// 	expect(shinyArray[0]).toBe(499)
// 	expect(shinyArray[99]).toBe(635)

// })

// // findShiny(499)
// console.log('findShiny(499):', findShiny(499));
// // findShiny(111)
// console.log('findShiny(111):', findShiny(111));
// // findShiny(0)
// // console.log('findShiny(0):', findShiny(0));
// // findShiny(246888)
// console.log('findShiny(246888):', findShiny(246888));

// // findShiny(1231)
// console.log('findShiny(1431):', findShiny(1431));
// // findShiny(21)
// console.log('findShiny(21):', findShiny(21));
// // findShiny(63)
// console.log('findShiny(63):', findShiny(63));



router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// Get all products in the db
router.get('/', function(req, res,next) {
	res.render('index', { title: 'Shiny Numbers',shiny:[]});


	// console.log('res:', res);
	// console.log('list')
}
);

module.exports = router;
