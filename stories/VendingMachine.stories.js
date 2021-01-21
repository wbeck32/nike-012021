import React from 'react';
import VendingMachine from '../VendingMachine'

export default {
	title:'VendingMachine',
	component:VendingMachine
}
const VendingMachineTemplate = args => <VendingMachine {...args}/>

export const Default = VendingMachineTemplate.bind({})