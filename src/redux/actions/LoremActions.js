import { REQUEST_STARTED,REQUEST_SUCCESS,REQUEST_FAILURE } from "./ActionTypes";
import axios from "axios";

export const requestStarted=()=>{
    return{
        type:REQUEST_STARTED
    }
}

export const requestSuccess=(data)=>{
    return{
        type:REQUEST_SUCCESS,
        payload:data
    }
}

export const requestFailure=(error)=>{
    return{
        type:REQUEST_FAILURE,
        payload:error
    }
}

export function fetchLorem(){
    return (dispatch)=>{
        dispatch(requestStarted())
        axios.get('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1',{
            headers:
            { 
                'X-Api-Key': 'oZveMcPIdD2dm+T9QVtZBA==YotjlY7pEcHyoEvM'
            }})
        .then(response => dispatch(requestSuccess(response.data)))
        .catch(error => dispatch(requestFailure(error.message)))
    }
}
