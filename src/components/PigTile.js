import React from 'react'
import PigTileFront from './PigTileFront'
import PigTileBack from './PigTileBack'

class PigTile extends React.Component{

    state = {
        side: 'front'
    }

    handleClick = () => {
        if(this.state.side === 'front'){
            this.setState({side: 'back'})
        }else{
            this.setState({side: 'front'})
        }
    }

    toggleTile = () => {
        let {name, specialty, greased, weight } = this.props.hogData
        if(this.state.side === 'front'){
            return <PigTileFront name={name} image={this.props.image}/> 
        }else{
            return <PigTileBack specialty={specialty} greased={greased} weight={weight} medal={this.props.hogData['highest medal achieved']}/>
        }
    }

    render(){
        return(
            <div onClick={this.handleClick} className="pigTile" name={this.props.hogData.name}>
                {this.toggleTile()} 
            </div>
        )
    }
    componentDidMount(){
        console.log('heyyyy, unmounting?')
    }
}
PigTile.defaultState = {
    side: 'front'
}

export default PigTile