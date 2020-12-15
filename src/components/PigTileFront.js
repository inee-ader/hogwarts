import React from 'react'

function PigTileFront(props){
    return(
        <div className="pigTileFront">
            <img src={props.image} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default PigTileFront