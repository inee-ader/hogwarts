import React from 'react'

// filters hogs displayed 

class PigForm extends React.Component{
    render(){
        return(
            <form onChange={this.props.handleChange}>
                <select name="sortBy">
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
                <input type="radio" name="greased" value="greased" />
                <label for="greased">Greased</label>
                <input type="radio" name="greased" value="notGreased" />
                <label for="notGreased">Not Greased</label>
                <input type="radio" name="greased" value="all" />
                <label for="all">All Piggies</label>
            </form>
        )
    }

}

export default PigForm