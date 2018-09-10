import React, { Component } from 'react'

import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { fetchCars } from '../actions/carActions'

import swal from 'sweetalert2'

class AccountTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    triggerDeleteAccount (id) {
        // this.props.deleteAccount(id)
		// this.props.fetchAccounts()
		swal('Garages App', `Sukses Delete ${id} `, 'success')
    }

    triggerUpdateAccount (id) {
        // swal update form
        swal('Garages App', `Sukses Update ${id} `, 'success')

        // updateAccount ()
        // this.updateAccount()
    }

    componentDidMount() {
        this.props.fetchCars()
    }

    render () {
        const cars = this.props.cars

        let isCarsEmpty = cars.length === 0

        return (
          	<React.Fragment>
				  
				 <Grid container
				 		direction="row"
                        justify="center"
						alignItems="center"
						className="caption" >

                      <Typography>
                          Car Table
                      </Typography>

                  </Grid>

				<Table className="cars-table">

				<TableHead>
					<TableRow>
					<TableCell numeric className="test">No</TableCell>
					<TableCell className="test">Brand</TableCell>
					<TableCell className="test">Model</TableCell>
					<TableCell className="test">Color</TableCell>
					<TableCell className="test">Engine</TableCell>
					<TableCell className="test">Power</TableCell>
					<TableCell className="test">Mileage</TableCell>
					<TableCell className="test">Price</TableCell>
					<TableCell className="test">Registration Date</TableCell>
					<TableCell className="test">Actions</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>

				{
					isCarsEmpty ? (
						<TableRow>
						<TableCell scope="row"> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						</TableRow>

					) : (
						cars.map( (car, i) => {
						return (
							<TableRow key={ i }>
							<TableCell component="th" scope="row" className="test"> { i+1 } </TableCell>
							<TableCell className="test"> { car.brand }</TableCell>
							<TableCell className="test"> { car.model }</TableCell>
							<TableCell className="test"> { car.color }</TableCell>
							<TableCell className="test"> { car.engine }</TableCell>
							<TableCell className="test"> { car.power }</TableCell>
							<TableCell className="test"> { car.mileage }</TableCell>
							<TableCell className="test"> { car.price }</TableCell>
							<TableCell className="test"> { car.registration_date }</TableCell>
							<TableCell>
						<Button color="primary" onClick={ () => this.triggerUpdateAccount(car._id) }>
							Update
						</Button>

						<Button color="secondary" onClick={ () => this.triggerDeleteAccount(car._id) }>
							Delete
						</Button>
						</TableCell>
							</TableRow>
						);
						})
					)

				}

				</TableBody>

				</Table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
  return {
    cars: state.carReducer.cars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCars  : () => { dispatch(fetchCars()) },
//   deleteAccount  : (id) => { dispatch(deleteAccount(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTable)
