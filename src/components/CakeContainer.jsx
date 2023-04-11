import React from 'react'
import { connect } from 'react-redux'
import ItemContainer from '../components/ItemContainer';

//pass down selected state to component
let mapStateProps = (state) => {
    return {
        cakes: state.cake.cakes
    }
}

function CakeContainer({ cakes, buyCake }) {

    return (
        <div>
            <ItemContainer type="cakes" />
        </div>
    )
}
let connector = connect(mapStateProps);//return a new prop state ready function to connect with component
let connectedComponent = connector(CakeContainer)
export default connectedComponent;