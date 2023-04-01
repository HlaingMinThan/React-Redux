import React from 'react'
import { buyCake } from '../redux/cakes/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function CakeContainer() {

    let cakes = useSelector(state => state.cake.cakes);
    let dispatch = useDispatch();

    return (
        <div>
            <h1>Total Cakes - {cakes}</h1>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    )
}