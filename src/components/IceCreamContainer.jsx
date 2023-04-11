import React, { useState } from 'react'
import { buyIceCream } from '../redux/iceCreams/actions'
import { connect } from 'react-redux'
import ItemContainer from '../components/ItemContainer';

//pass down selected state to component
let mapStateProps = (state) => {
    return {
        icecreams: state.iceCream.iceCreams
    }
}

//pass down selected action function to component
let mapDispatchProps = (dispatch) => {
    return {
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
}

function CakeContainer({ icecreams, buyIceCream }) {

    let [iceCreamCount, setIceCreamCount] = useState(0);
    return (
        <div>
            <ItemContainer type="ice cream" />
            <button onClick={() => buyIceCream(iceCreamCount)}>buy icecreams</button>
            <input type="number" value={iceCreamCount} onChange={e => setIceCreamCount(e.target.value)} />
        </div>
    )
}
let connector = connect(mapStateProps, mapDispatchProps);//return a new prop state ready function to connect with component
let connectedComponent = connector(CakeContainer)
export default connectedComponent;