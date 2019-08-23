import {combineReducers} from "redux"
import cars from "./car_reducer"
import user from "./user_reducer"

const rootReducer = combineReducers({
    cars,
    user
})

export default rootReducer;