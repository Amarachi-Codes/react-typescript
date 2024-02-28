import axios from "axios";
import { useEffect, useState } from "react";

interface Users{
    id:string;
    name:string;
    username:string;
    email:string;
    address: {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo: {
    lat:string;
    lng:string;
}
}
}

const Listusers = () => {
    const[users, setUsers]= useState<Users[]>([])
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        try {
           const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"

           );
           console.log(response);
        } catch (error) {
           console.log(`Error fetching data:${error}`);
            
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Listusers
