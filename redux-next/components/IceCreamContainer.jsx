import { buyIceCream } from '@/redux/icecream/iceCreamActions'
import React from 'react'
import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
  return (
    <div>
        <h1>Number of IceCreams - {props.noOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        noOfIceCreams: state.iceCream.numOfIceCreams,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => {dispatch(buyIceCream())}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)