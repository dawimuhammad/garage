import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

import { addNewCars  } from '../actions/carActions'
import { connect } from 'react-redux'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
  }
})

class CarInput extends Component {
    constructor (props) {
      super(props)
      this.state = {
        brand: '',
        model: '',
        year: 0,
        color: '',
        mileage: 0,
        engine: 0,
        power: 0,
        price: 0,
      }

      this.brandChange = this.brandChange.bind(this)
      this.modelChange = this.modelChange.bind(this)
      this.yearChange = this.yearChange.bind(this)
      this.colorChange = this.colorChange.bind(this)
      this.mileageChange = this.mileageChange.bind(this)
      this.engineChange = this.engineChange.bind(this)
      this.powerChange = this.powerChange.bind(this)
      this.priceChange = this.priceChange.bind(this)
      this.submitCar = this.submitCar.bind(this)
    }

    brandChange(e) {
      this.setState({
        brand: e.target.brand
      })
    }

    colorChange(e) {
      this.setState({
        color: e.target.color
      })
    }

    mileageChange(e) {
      this.setState({
        mileage: e.target.mileage
      })
    }

    priceChange(e) {
      this.setState({
        price: e.target.price
      })
    }

    powerChange(e) {
      this.setState({
        power: e.target.power
      })
    }

    engineChange(e) {
      this.setState({
        engine: e.target.engine
      })
    }

    modelChange(e) {
      this.setState({
        model: e.target.model
      })
    }

    yearChange(e) {
      this.setState({
        year: e.target.year
      })
    }


    submitCar(e) {
        e.preventDefault()

        this.props.addNewCars({
          brand: this.state.brand,
          model: this.state.model,
          year: this.state.year,
          color: this.state.color,
          mileage: this.state.mileage,
          engine: this.state.engine,
          power: this.state.power,
          price: this.state.price,
        })

        this.setState({
          brand: '',
          model: '',
          year: 0,
          color: '',
          mileage: 0,
          engine: 0,
          power: 0,
          price: 0,
        })
    }

    render () {
        return (
          <React.Fragment>

              <Paper>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className="container-dual-rpm">

                  <Grid container
                        justify="center"
                        alignItems="center"
                        className="caption" >

                      <Typography>
                          Car Input Form
                      </Typography>

                  </Grid>

                  <Grid container
                        justify="center"
                        alignItems="center" >

                    <form id="rpm-input" onSubmit={ this.submitCar }>

                      <TextField
                        id="car-brand"
                        label="Brand"
                        placeholder="Type brand .."
                        fullWidth
                        margin="normal"
                        value={ this.state.brand }
                        onChange={ this.brandChange }
                      />

                      <TextField
                        id="car-model"
                        label="Model"
                        placeholder="Type your car model .."
                        fullWidth
                        margin="normal"
                        value={ this.state.model }
                        onChange={ this.modelChange }
                      />
                      
                      <TextField
                        id="car-year"
                        label="Year"
                        placeholder="Type your car built-year .."
                        fullWidth
                        margin="normal"
                        value={ this.state.year }
                        onChange={ this.yearChange }
                      />

                      <TextField
                        id="car-mileage"
                        label="Mileage (Km)"
                        placeholder="Type car mileage in Kilometres .."
                        fullWidth
                        margin="normal"
                        value={ this.props.mileage }
                        onChange={ this.mileageChange }
                      />
                      
                      <TextField
                        id="car-color"
                        label="Color"
                        placeholder="Type car color .."
                        fullWidth
                        margin="normal"
                        value={ this.props.color }
                        onChange={ this.colorChange }
                      />

                      <TextField
                        id="car-engine"
                        label="Engine Type"
                        placeholder="Type car engine type .."
                        fullWidth
                        margin="normal"
                        value={ this.props.engine }
                        onChange={ this.engineChange }
                      />
                      
                      <TextField
                        id="car-power"
                        label="Engine Power"
                        placeholder="Type car engine power (horsepower) .."
                        fullWidth
                        margin="normal"
                        value={ this.props.power }
                        onChange={ this.powerChange }
                      />
                      
                      <TextField
                        id="car-price"
                        label="Car Price"
                        placeholder="Type car price (Rp)"
                        fullWidth
                        margin="normal"
                        value={ this.props.price }
                        onChange={ this.priceChange }
                      />

                      <Grid container
                            justify="center"
                            alignItems="center"
                            className="button-save" >
                            <Button id="account-save" type="submit" variant="fab" color="primary" className="rpm-button-account-save">
                                <AddIcon />
                            </Button>

                      </Grid>

                    </form>

                  </Grid>

                </Grid>
              </Paper>


          </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
  return {
    car: state.carReducer.car,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewCars: (newCar) => { dispatch(addNewCars(newCar)) },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CarInput))
