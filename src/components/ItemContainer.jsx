import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCreams/actions';
import { buyCake } from '../redux/cakes/actions';

function ItemContainer({ type, itemCount, buyItem }) {
    return (
        <>
            <h1>Total {type} - {itemCount}</h1>
            <button onClick={buyItem}>buy {type}</button>
        </>
    )
}

let mapStateToProps = (state, initialProps) => {
    let { type } = initialProps;

    return {
        itemCount: type === 'cakes' ? state.cake.cakes : state.iceCream.iceCreams
    }
}
let mapDispatchProps = (dispatch, initialProps) => {
    let { type } = initialProps;
    let action = type === 'cakes' ? buyCake() : buyIceCream();
    return {
        buyItem: () => dispatch(action)
    }
}

let connector = connect(mapStateToProps, mapDispatchProps);//return a new prop state ready function to connect with component
let connectedComponent = connector(ItemContainer)
export default connectedComponent;