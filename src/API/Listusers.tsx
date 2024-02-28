import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

interface Users{
    id:number;
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
           const responseData:Users[] = response.data;
           setUsers(responseData);
           console.log(response.data);
        } catch (error) {
           console.log(`Error fetching data:${error}`);
            
        }
    }
    const handleDelete =(id:number)=>{
        alert("user with: "+id + " deleted sucessfully");
    }
  return (
    <>
    <div className="text text-primary">List Users</div>
    <table className="table table-bordered border-primary">
        <thead className="thead-dark">
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user)=>(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street},{user.address.city}</td>
                <td><button className="btn btn-danger" onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </>
  )
}

export default Listusers
