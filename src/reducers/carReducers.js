const initialState = {
    cars : []
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARS' :
            return { ...state, cars: action.payload.cars }
        default :
            return state
    }
}

export default carReducer