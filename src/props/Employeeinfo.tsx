import { ChangeEvent, useState } from "react"

interface Employee{
    firstname: string;
    lastname: string;
    jobtitle: string;
}
const Employeeinfo = () => {
    const [employee, setEmployee]=useState<Employee>({
        firstname:"",
        lastname:"",
        jobtitle:"",
    })
    const handleFirstnameChange =(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
setEmployee((prevEmployee)=>({
  ...prevEmployee,
  firstname: e.target.value,
    }))
    }

    const handleLastnameChange =(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      setEmployee((prevEmployee)=>({
        ...prevEmployee,
       lastname: e.target.value,
          }))
          }
          const handleJobtitleChange =(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
            setEmployee((prevEmployee)=>({
              ...prevEmployee,
             jobtitle: e.target.value,
             
                }))
                }
  return (
    <>
    <div>
      Employeeinfo
    </div>
    <label htmlFor="firstname">Firstname:</label>
    <input type="text" name="firstname" id="firstname" onChange={handleFirstnameChange} value={employee.firstname}/><br />
    <label htmlFor="lastname">Lastname:</label>
    <input type="text" name="lastname" id="lastname" onChange={handleLastnameChange} value={employee.lastname}/><br />
    <label htmlFor="jobtitle">Job Title:</label>
    <input type="text" name="jobtitle" id="jobtitle" onChange={handleJobtitleChange} value={employee.jobtitle}/>
    <br />
    <br />
    <h2>Display Info</h2>
    <p>Firstname: {employee.firstname}</p>
    <p>Lastname: {employee.lastname}</p>
    <p>Jobtitle: {employee.jobtitle}</p>
    
    </>
  )
}

export default Employeeinfo
