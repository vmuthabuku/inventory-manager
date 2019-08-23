export default function(state={},action){
    switch(action.type){
        case "GET_CARS":
            return { ...state, list:action.payload} 
        case 'GET_CAR_REV':
            return {...state, car: action.payload}
        case 'GET_A_CAR':
            return {...state, car: action.payload}
        case 'ADD_CAR':
            return {...state, newcar: action.payload}
        case 'CLEAR_CAR':
            return {...state, newcar: action.payload}
        case 'UPDATE_CAR':
            return {...state, 
                updateCar: action.payload.success,
                car: action.payload.doc}
        case 'DELETE_CAR':
            return{
                ...state,
                postDeleted:action.payload
            }
        case 'CLEAR_CAR_UPDATE':
            return{
                ...state,
                updateCar: action.payload.updateCar,
                car:action.payload.car,
                postDeleted: action.payload.postDeleted
            }
        
        default:
            return state;
    }

}