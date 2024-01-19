import { REQUEST_FAILURE,REQUEST_STARTED,REQUEST_SUCCESS } from "../actions/ActionTypes"

const initialstate={
    loading:false,
    data:[],
    error:""
}

export const LoremReducer=(state=initialstate,action)=>{
       switch (action.type) {
        case REQUEST_STARTED:
            return {...state,loading:true}
        
        case REQUEST_SUCCESS :
            return {...state,loading:false,data:action.payload,error:''}
        
        case REQUEST_FAILURE:
            return {...state, loading: false, data: [],error:action.payload}
          
       
        default:
            return state;
       }
}