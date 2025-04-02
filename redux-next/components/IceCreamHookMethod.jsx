import { buyIceCream } from '@/redux/icecream/iceCreamActions';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const IceCreamHookMethod = () => {
	const noOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Number Of IceCreams - {noOfIceCreams}</h2>
			<button onClick={() => {dispatch(buyIceCream())}}>Buy Icecream</button>
		</div>
	)
}

export default IceCreamHookMethod