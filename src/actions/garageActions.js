import axios from 'axios'

export const addGarageToState = garages => {
    return {
        type: 'ADD_GARAGES',
        payload: {
            garages: garages
        }
    }
}

export const fetchGarages = () => async dispatch => {
    axios.get('http://localhost:3000/garage/find/all')
    .then(function(response) {
        console.log('fetching garages, response : ', response.data.data)
        dispatch(addGarageToState(response.data.data))
    })
    .catch(function(error) {
        console.log('Fetching garage error : ', error)
    })
}