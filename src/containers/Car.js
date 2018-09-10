import React, { Component } from 'react'

import NavigationBar from '../components/NavigationBar'
import CarTable from '../components/CarTable'
import CarInput from '../components/CarInput'

class Car extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />

                {/* <CarInput /> */}

                <CarTable />
                
            </React.Fragment>
        )
    }
}

export default Car