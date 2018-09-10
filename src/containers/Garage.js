import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar'
import GarageTable from '../components/GarageTable'


class Garage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />

                <GarageTable />
                
            </React.Fragment>
        )
    }
}

export default Garage