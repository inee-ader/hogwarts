import React from 'react'

function PigTileBack(props){
        return(
            <div className="pigTileBack">
                <p>Specialty: {props.specialty}</p>
                <p>Greased? {!!props.greased ? "GREASY!" : "not greased"}</p>
                <p>Weight: {props.weight}</p>
                <p>Highest Medal Achieved: {props.medal}</p>
            </div>
        )
    }


export default PigTileBack