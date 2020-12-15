import React from 'react'
import PigTile from './PigTile'
import hogs from '../porkers_data'
import PigForm from './PigForm'

class PigContainer extends React.Component{
    
    state ={
        hogsRendered: [...hogs], 
        filter: {
            sort: 'name',
            greased: 'all'
        }
    }

    makeTiles = () => {
        return this.state.hogsRendered.map(hog => {
            return <PigTile hogData={hog} image={this.getImage(hog.name)} /> 
        })
    }

    getImage = (name) => {
        let pigName = name.toLowerCase().split(' ').join('_')
        let pigImage = require(`../hog-imgs/${pigName}.jpg`)
        return pigImage 
    }

    handleChange = (e) => {
        console.log(e.target.type)
        if(e.target.type === 'select-one'){
            this.setState({
                filter: {
                    ...this.state.filter, sort: e.target.value
                }
            })
        }else{
            this.setState({
                filter: {
                    ...this.state.filter, greased: e.target.value
                }
            })
        }
    }

    filterHogs = () => {
        let newHogs = [...hogs]
        if(this.state.filter.greased === 'greased'){
            newHogs = newHogs.filter(hog => hog.greased === true)
        }else if(this.state.filter.greased === 'notGreased'){
            newHogs = newHogs.filter(hog => hog.greased === false)
        }
        if(this.state.filter.sort === 'weight'){
            newHogs = newHogs.sort((a, b) => a[this.state.filter.sort] - b[this.state.filter.sort])
        }else{
            newHogs = newHogs.sort((a, b) => a.name > b.name ? 1 : -1)
        }
        return newHogs
    }

    componentDidUpdate(){
        const updatedHogs = this.filterHogs()
        this.setState({
            hogsRendered: updatedHogs
        })
    }

    render() {
        return(
            <div id="pig-container">
                <PigForm handleChange={this.handleChange}/> 
                {this.makeTiles()}
            </div>
        )
    }
}


    
   

export default PigContainer