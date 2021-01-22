const { LokiLocalStorageAdapter } = require('lokijs');
const loki = require('lokijs')
const lsLokiAdapter = new LokiLocalStorageAdapter()

const utils = {
	initializeProducts:products =>{
		const db = new loki('productStorage.db',{
			env:'NODEJS',
			verbose:true,
			adapter:lsLokiAdapter,
		})

		if(db.collections.length === 0){
			const productCollection = db.addCollection('products')
			productCollection.insert(products)
			// console.log('productCollection:', productCollection);
		}
	},
	updateProducts:products => {
		return;
		
	},
	retrieveProducts: ()=> {
		console.log('retrieveProducts:');
	}
}

module.exports = utils