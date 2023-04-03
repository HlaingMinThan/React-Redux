import React, { useState } from 'react'
import { buyIceCream } from '../redux/iceCreams/actions'
import { connect } from 'react-redux'

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
            <h1>Total Icecreams - {icecreams}</h1>
            <button onClick={() => buyIceCream(iceCreamCount)}>buy cake</button>
            <input type="number" value={iceCreamCount} onChange={e => setIceCreamCount(e.target.value)} />
        </div>
    )
}
let connector = connect(mapStateProps, mapDispatchProps);//return a new prop state ready function to connect with component
let connectedComponent = connector(CakeContainer)
export default connectedComponent;