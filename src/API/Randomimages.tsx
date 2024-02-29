import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Images{
id:number,
title:string,
url:string,
thumbnailUrl:string
}

const Randomimages = () => {
    const [images, setImages]=useState<Images []>([])
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        try {
           const response = await axios.get(
            "https://jsonplaceholder.typicode.com/photos"
            ); 
            const responseData:Images[] = response.data;
            setImages(responseData)
        } catch (error) {
         console.log(`Error fetching Data: ${error}`);
          
        }
    }
    const handleDelete =(id:number)=>{
        alert("user with: "+id + " deleted sucessfully");
    }
  return (
    <>
    <div className="text text-secondary">Random Images</div>
    <table className="table table-bordered border-secondary">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Url</th>
                <th>thumbnail Url</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {images.map((image)=>(
                <tr key={image.id}>
                    <td>{image.id}</td>
                    <td>{image.title}</td>
                    <td>{image.url}</td>
                    <td><img src={image.thumbnailUrl} alt="" /></td>
                    <td><button className="btn btn-danger" onClick={()=>{handleDelete(image.id)}}>Delete</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Randomimages
