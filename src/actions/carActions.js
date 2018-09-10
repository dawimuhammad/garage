import axios from 'axios'
import swal from 'sweetalert2';

export const addCarsToState = cars => {
    return {
        type: 'ADD_CARS',
        payload: {
            cars: cars
        }
    }
}

export const fetchCars = () => async dispatch => {
    axios.get('http://localhost:3000/cars/find/all')
    .then(function(response) {
        console.log('fetching cars, response : ', response.data.data)
        dispatch(addCarsToState(response.data.data))
    })
    .catch(function(error) {
        console.log('Fetching cars error : ', error)
    })
}

export const addNewCars = (newCar) => async dispatch => {
    console.log('ini new car : ', newCar)
    // axios.post('http://localhost:3000/cars/', {
    //     brand: '',
    //     model: '',
    //     year: 2018,
    //     color: '',
    //     mileage: 0,
    //     engine: 0,
    //     power: 0,
    //     price: 0,
    //     image_url: ''
    // })
    // .then( function (response) {
    //     console.log(response)
    //     swal('Success', 'Created One More Car!', 'success')
    //     dispatch(fetchCars())
    // })
    // .catch( function (error) {
    //     console.log('Add new car failed : ', error)
    //     swal('Ouch', 'Add new car failed!', 'error')
    //     dispatch(fetchCars())
    // })
}