import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Images{
albumId:number,
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
  return (
    <>
    <div className="text text-secondary">Random Images</div>
    <table className="table table-bordered border-secondary">
        <thead>
            <tr>
                <th>Album Id</th>
                <th>Title</th>
                <th>Url</th>
                <th>thumbnailUrl</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {images.map((image)=>(
                <tr key={image.albumId}>
                    <td>{image.albumId}</td>
                    <td>{image.title}</td>
                    <td>{image.url}</td>
                    <td>{image.thumbnailUrl}</td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Randomimages
