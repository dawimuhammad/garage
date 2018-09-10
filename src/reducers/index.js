import { combineReducers } from 'redux'
import carReducer from './carReducers'
import garageReducer from './garageReducers'

const reducers = combineReducers ({
    carReducer,
    garageReducer
})

export default reducers