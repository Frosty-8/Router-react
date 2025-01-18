/*
    https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users?firstName=Sarthak
    using this technique we can fetch the data from the api
*/



import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const initialObj={
    id : 0,
    firstName : "",
    lastName:"",
}

export function User(){
    const [user,setUser] = useState(initialObj);
    const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/";

    const{id} = useParams();

     useEffect(()=>{
        axios.get(baseURL + id).then((response)=>{
            setUser(response.data);
        });
     },[id]);

    

  return (
    <form action="">
        <h1> User Details</h1>
        <h1> ID : {user.id}</h1>
        <h1> Firstname : {user.firstName}</h1>
        <h1> Lastname : {user.lastName}</h1>
    </form>
  )
}
