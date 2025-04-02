import { buyCake } from '@/redux/cake/cakeActions'
import React from 'react'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    const [noOfCakes, setNoOfCakes] = React.useState(1);

    return (
        <div>
            <h2>Number of Cakes: {props.noOfCakes}</h2>
            <input type="number" placeholder='Enter the number of cakes' value={noOfCakes} onChange={(e) => {
                setNoOfCakes(parseInt(e.target.value));
            }} />
            <button onClick={() => {
                props.buyCake(noOfCakes);
            }}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.cake.noOfCakes,
        recentActionMessage: state.cake.recentActionMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (noOfCakes = 1) => {dispatch(buyCake(noOfCakes))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);