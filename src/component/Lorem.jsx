import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import './Lorem.css'
import { requestStarted,requestSuccess,requestFailure,fetchLorem } from '../redux/actions/LoremActions';
const Lorem = () => {

  const data  = useSelector(state=>state.data) 
  const loading = useSelector(state=>state.loading)
  const error = useSelector(state=>state.error)
  
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchLorem())
  },[])
  return (
    <>
      <h1>BELOW DATA IS FETCHED FROM LOPEM-IPSUM API USING REDUX</h1>
      {loading && "loading...."}
      <div className='container'>
      {data?.text?.split(".").map((item,index)=>{
        return <div key={index}>{item}</div>
      })}
      </div>
      {error && <div>{error}</div>}
      
    
    </>
  )
}

export default Lorem