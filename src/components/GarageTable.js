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
import { fetchGarages } from '../actions/garageActions'

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
        this.props.fetchGarages()
    }

    render () {
        const garages = this.props.garages

        let isGaragesEmpty = garages.length === 0

        return (
          	<React.Fragment>
				  
				 <Grid container
				 		direction="row"
                        justify="center"
						alignItems="center"
						className="caption" >

                      <Typography>
                          Garages Table
                      </Typography>

                  </Grid>

				{ <Table className="garages-table">

				<TableHead>
					<TableRow>
					<TableCell numeric className="test">No</TableCell>
					<TableCell className="test">Garage</TableCell>
					<TableCell className="test">Address</TableCell>
					<TableCell className="test">Email</TableCell>
					<TableCell className="test">Phone</TableCell>
					<TableCell className="test">Maximum Cars</TableCell>
					<TableCell className="test">Actions</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>

				{
					isGaragesEmpty ? (
						<TableRow>
						<TableCell scope="row"> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						<TableCell> </TableCell>
						</TableRow>

					) : (
						garages.map( (garage, i) => {
						return (
							<TableRow key={ i }>
							<TableCell component="th" scope="row" className="test"> { i+1 } </TableCell>
							<TableCell className="test"> { garage.name }</TableCell>
							<TableCell className="test"> { garage.address }</TableCell>
							<TableCell className="test"> { garage.phone }</TableCell>
							<TableCell className="test"> { garage.email }</TableCell>
							<TableCell className="test"> { garage.maxCars }</TableCell>
							<TableCell>
								<Button color="primary" onClick={ () => this.triggerUpdateAccount(garage._id) }>
									Update
								</Button>

								<Button color="secondary" onClick={ () => this.triggerDeleteAccount(garage._id) }>
									Delete
								</Button>
								</TableCell>
							</TableRow>
						);
						})
					)

				}

				</TableBody>

				</Table>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
  return {
    garages: state.garageReducer.garages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGarages  : () => { dispatch(fetchGarages()) },
//   deleteAccount  : (id) => { dispatch(deleteAccount(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTable)
