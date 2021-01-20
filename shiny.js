const compare = (element,index,array) =>{
	// console.log('element,index,array:', element,index,array);
	// 	console.log('numArr:', numArr);
	let comp = true
	// 	// let comp = []
	array.filter((num,idx)=>{
		// console.log('num,idx:', num,idx);
		// console.log('array[idx+1]!==null:', array[idx+1]!==null);
		// console.log('array[idx+1]:', array[idx+1],typeof array[idx+1]);
		// console.log('array[idx]<=array[idx+1]:', array[idx]<=array[idx+1]);
		if(array[idx+1] !== undefined) comp = array[idx]<=array[idx+1];
		// comp = (array[idx+1] !== null) ? array[idx]<=array[idx+1]: false
		// return(array[idx]<=array[idx+1])
		
	})
	
	console.log('comp:', comp);
// 	numArr.filter((num,idx)=>{
// // 		// console.log('num,idx:', num,idx);
// // 		console.log('numArr[idx-1] <= numArr[idx]:', numArr[idx-1] <= numArr[idx]);
// // 		// console.log('numArr[idx] , numArr[idx+1]:', numArr[idx], numArr[idx+1]);

// return (array[index-1] <= array[index])


// 	})
	 return comp



}


const findShiny = (num) =>{
	let numArray = [];
	let digArray = []
	for(let y = 0;y<=5;y++){
		digArray.push(Array.from(String(num+y),Number))
	}
	digArray.filter((dig,idx)=>{
		const com = dig.every(compare)
		console.log('com:', com);
		com === true ? numArray.push(dig): numArray
		console.log('numArray:', numArray);
		console.log('=============')
		// console.log('digArray:', digArray);
		// console.log('dig:', dig);
		dig.filter((d,i)=>{
			// console.log('d,i:', d,i);
			// console.log('dig, dig[i]:', dig, dig[i]);
			
			// console.log('dig[i], dig[i+1]:', dig[i] <= dig[i+1]);
			// console.log('dig[i+1]!==null:', dig[i+1]!==null);
			// console.log('digArray[idx+1]!==null:', digArray[idx+1]!==null);
			// console.log('d:', d);
			// console.log('dig[i]:', dig[i]);
			// return(dig[i] <= dig[i+1]&& dig[i+1]!==null&&numArray.length <100)?numArray.push(dig):null
		})
		
		// console.log('numArray:', numArray)
		// console.log('dig,idx:', dig,idx);
	// return(digArray[idx] <= digArray[idx+1]&& digArray[idx+1]!==null&&numArray.length <100)? numArray.push(dig) : numArray.push(digArray[idx])
})
	let totalArray = []
	// for(let y = num;y<=num+20;y++){
		// console.log('y:', y);
		// for(let x=-1;x<= numString.length;x++){
numArray.forEach(element => {
	// console.log('element:', element,numArray);
	// console.log('x <=x+1:', numString.charAt(x) <=numString.charAt(x+1));
	// (numString.charAt(x+1)!==null&&numString.charAt(x) <=numString.charAt(x+1)&&numArray.length<=99) ? numArray[x]=(numString.charAt(x+1)): totalArray
	// console.log('totalArray:', totalArray);
	
});
			// console.log('nums : ', numString.charAt(x),numString.charAt(x+1));
			// console.log('x+1 !==null :', numString.charAt(x+1)!==null);
			// console.log('numArray.length<=100:', numArray.length);
			return numArray
		}
		// console.log('numString.length === numArray.length:', numArray.length<=100);
		// console.log('numArray:', numArray);
	// }


	// }
	// for(let y=min;y<=100;y++){
		// console.log('y:', y);


// console.log('findShiny(123):', findShiny(123));
console.log('====')
// findShiny(499)
// console.log('findShiny(499):', findShiny(499,100));
// findShiny(111)
// console.log('findShiny(111):', findShiny(111,100));
// findShiny(0)
// console.log('findShiny(0):', findShiny(0,100));
// findShiny(246888)
// console.log('findShiny(246888):', findShiny(246888));

// findShiny(1231)
console.log('findShiny(1431):', findShiny(1431));
// findShiny(21)
// console.log('findShiny(21):', findShiny(21));
// findShiny(63)
// console.log('findShiny(63):', findShiny(63));
