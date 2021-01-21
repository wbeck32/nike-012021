// You need to design a Vending Machine which only accepts and returns bills of 1, 5, 10, 25, 50, 100. 
// Allow user to select Nike products 
// •Air Max Plus(125)
// •Epic React Flynit (150)
// •Air VaporMax Flyknit 2 (190)
// •Air Max 270 (150)
// •Zoom Stefan Janoski (85)
// Allow user to be refunded by canceling the request.
// Based on the selected product, return remaining change if any
// Just document your approach. There is no need for detailed design diagrams.
import {Accordion,Button,ListItem,ListItemText,Card,Container,Input} from '@material-ui/core' 
import React,{useState} from 'react'

const VendingMachine = () =>{
	const products = [
		{price:125,name: 'Air Max Plus'},
		{price:150,name: 'Air Max 270'},
		{price:150,name: 'Epic React Flyknit'},
		{price:350,name: 'My Shoe'},
	]
	let bills = {
		100:0,
		50:0,
		25:0,
		10:0,
		5:0,
		1:0
	}
	
	const [moneyIn,setMoneyIn] = useState(0)
	const [moneyObj,updateMoneyObj] = useState(bills)
	const [selectedIndex, setSelectedIndex] = useState();
	const [expanded,setExpanded] = useState(false)
	const [caption,setCaption] = useState('Insert some money')
	
	const handleClick = async e =>{
await setMoneyIn(moneyIn + e)
console.log('moneyIn + e:', moneyIn);
		await setCaption(`You've inserted: `)
		const updateBill = moneyObj[e]=moneyObj[e]+1
		updateMoneyObj({...moneyObj,...updateBill})
	}	
	
	const handleListItemClick = async (e,idx) =>{
		setSelectedIndex(idx)
	}
	
	// const handleCancel = e => {
	// 	console.log('e:', e);
	// 	const updateBill = moneyObj[e]=moneyObj[e]+1
	// 	console.log('updateBill:', updateBill);
	// 	updateMoneyObj({...moneyObj,...updateBill})
	// 	console.log('moneyObj:', moneyObj);
		
	// 	// Object.keys(moneyObj).map(m=>{
	// 	// 	console.log('m,i:', Number(m),moneyObj[Number(m)]);
			
			
	// 	// })		
	// }
	const handleMoneyBack = e => {
		console.log('e:', e);
		setCaption('reset')
		console.log('products[selectedIndex]:', products[selectedIndex]);
		if(e==='cancel') setCaption('Your refund amount:')
		if(products[selectedIndex]) {
			setCaption('nothing selected')
		const {price,name} = products[selectedIndex]
		console.log('price:', price);
		let change = moneyIn - price
		console.log('change:', change);
		
		moneyObj[100]=change !== 0 ? Math.trunc(change/100):0,
		change = change - (moneyObj[100]*100)
		
		moneyObj[50]=change !== 0 ?Math.trunc((change/50)):0,
		change = change - (moneyObj[50]*50)
		
		moneyObj[25]=change !== 0 ?Math.trunc((change/25)):0
		change = change - (moneyObj[25]*25)
		
		moneyObj[10] = change !==0 ? Math.trunc(change/10):0
		change = change - (moneyObj[10]*10)
		
		moneyObj[5] = change !==0 ? Math.trunc(change/5):0
		change = change - (moneyObj[5]*5)
		
		moneyObj[1] = change !==0 ? Math.trunc(change/1):0
		change = change - (moneyObj[1]*1)
	}
	setCaption('your change is')
		console.log('moneyObj:', moneyObj);		
	}

	const MoneyList = props =>{
		const {values} = props
		const mL = Object.keys(values).map(o=>{
			return <div>${Number(o)} : {moneyObj[Number(o)]}</div>
		})

return mL
	}
	
	
	return (
		<>
		<Container>
		<Card>
		<div>
		Insert payment:
		<Button variant="contained" onClick={(v=>handleClick(1))} color="primary">$1</Button>
		<Button variant="contained"  onClick={(v=>handleClick(5))} color="secondary">$5</Button>
		<Button variant="contained"  onClick={(v=>handleClick(10))} color="secondary">$10</Button>
		<Button variant="contained"  onClick={(v=>handleClick(25))} color="secondary">$25</Button>
		<Button variant="contained"  onClick={(v=>handleClick(50))} color="secondary">$50</Button>
		<Button variant="contained"  onClick={(v=>handleClick(100))} color="secondary">$100</Button>
		</div>
		<Accordion expanded={expanded}>
		<div>{products.length > 0 && 
			products.map((n,idx)=>{
				if(n.price <= moneyIn){
					return( 
						<ListItem key={idx} selected={selectedIndex===idx} button={true} onClick={(event) => handleListItemClick(event, idx)}>
						<ListItemText>{n.name} - ${n.price}</ListItemText>
						</ListItem>
						)
					} 
				})
			}
			</div>
			</Accordion>
			<Button variant="contained"  onClick={e=>handleMoneyBack('purchase')} color="secondary">Purchase</Button>
			<Button variant="contained" onClick={e=>handleMoneyBack('cancel')} color="secondary">Cancel</Button>
			</Card>
			<Card>
			{caption}
			{moneyObj &&
			<MoneyList key="1" values={moneyObj}/>
				
			}
			</Card>
			</Container>
			</>
			)
		}
		
		export default VendingMachine