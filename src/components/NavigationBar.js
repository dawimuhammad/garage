import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

class NavigationBar extends Component {
    render () {
        return (
          <AppBar position="static" color="transparent">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center" >
                <Toolbar>
                    <Typography>
                        Welcome, user!
                    </Typography>
                </Toolbar>


                <Grid>

                    <Button color="primary">
                        <Link className="topButtonMenu" to="/">
                            Car
                        </Link>
                    </Button>

                    <Button color='primary'>
                        <Link className="topButtonMenu" to="/garage">
                            Garage
                        </Link>
                    </Button>
                </Grid>
            </Grid>
          </AppBar>
        )
    }

}

export default NavigationBar
