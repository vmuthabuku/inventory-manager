import axios from "axios"

export function getCars(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ""
){
    
    const request = axios.get(`http://localhost:3001/api/getcars?limit=${limit}&skip=${start}&order=${order}`)
                        .then(response => {
                            if(list) {
                                return [...list, ...response.data]
                            }else{
                                return response.data
                            }
                        })

    return {
        type:'GET_CARS',
        payload:request
    }

}

export function getCarPost(id){
    const request = axios.get(`http://localhost:3001/api/getcar?id=${id}`)
            .then(response => response.data)
    return{
        type:"GET_CAR_REV",
        payload:request
    }


    // return (dispatch) =>{
    //     request.then(({data})=>{
    //         let car = data;

    //         axios.get(`http://localhost:3001/api/getUser?id=${car.ownerId}`)
    //         .then(({data})=>{
    //             let response = {
    //                 car,
    //                 reviewer: data
    //             }
    //             console.log(response)
    //             dispatch({
    //                 type:'GET_CAR_REV',
    //                 payload:response
    //             })
    //         })


    //     })
    // }

}

export function loginUser({email,password}) {
    const request = axios.post('http://localhost:3001/api/login', {email,password})
                    .then(response => response.data)
                    
    return{
        type:"LOGIN_USER",
        payload:request
    }
}

export function auth() {
    const request = axios.get('http://localhost:3001/api/auth')
                    .then(response => response.data)
                    
    return{
        type:"USER_AUTH",
        payload:request
    }
}

export function addPost(car){
    const request = axios.post('http://localhost:3001/api/car', car)
                    .then(response => response.data)
    return {
        type:"ADD_CAR",
        payload:request
    }
}

export function clearCar(){
    return{
        type:"CLEAR_CAR",
        payload:null
    }

}

export function getCar(id){
    const request = axios.get(`http://localhost:3001/api/getcar?id=${id}`)
                        .then(response => response.data)
    return {
        type:"GET_A_CAR",
        payload:request
    }
}

export function updateCar(data){
    const request = axios.post(`http://localhost:3001/api/car_update`,data)
                    .then(response => response.data)
    return {
        type:"UPDATE_CAR",
        payload:request
    }
}

export function deleteCar(id){
    const request = axios.delete(`http://localhost:3001/api/delete_car?id=${id}`)
                        .then(response => response.data)
    return {
        type:"DELETE_CAR",
        payload:request
    }
}

export function clearOnDelete(){
    return{
        type:'CLEAR_CAR_UPDATE',
        payload:{
            cars:null,
            updateCar:false,
            postDeleted:false
        }
    }
}

