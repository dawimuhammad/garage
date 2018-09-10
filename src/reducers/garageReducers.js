const initialState = {
    garages : []
}

const garageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GARAGES' :
            return { ...state, garages: action.payload.garages }
        default :
            return state
    }
}

export default garageReducer