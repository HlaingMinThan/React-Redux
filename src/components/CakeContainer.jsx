import React from 'react'
import { buyCake } from '../redux/cakes/actions'
import { connect } from 'react-redux'

//pass down selected state to component
let mapStateProps = (state) => {
    return {
        cakes: state.cakes
    }
}

//pass down selected action function to component
let mapDispatchProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

function CakeContainer({ cakes, buyCake }) {

    return (
        <div>
            <h1>Total Cakes - {cakes}</h1>
            <button onClick={buyCake}>buy cake</button>
        </div>
    )
}

export default connect(mapStateProps, mapDispatchProps)(CakeContainer);