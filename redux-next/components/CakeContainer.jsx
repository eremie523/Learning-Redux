import { buyCake } from '@/redux/cake/cakeActions'
import React from 'react'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes: {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.noOfCakes,
        recentActionMessage: state.recentActionMessage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);