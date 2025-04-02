import { buyCake } from '@/redux/cake/cakeActions';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CakeContainerHookMethod = () => {
    const noOfCakes = useSelector(state => state.cake.noOfCakes);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>Number of Cakes - {noOfCakes}</h2>
            <button onClick={() => {dispatch(buyCake())}}>Buy Cake</button>
        </div>
    )
}

export default CakeContainerHookMethod