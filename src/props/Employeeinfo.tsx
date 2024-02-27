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
    const handlefirstnameChange =(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

    }
  return (
    <div>
      Employeeinfo
    </div>
  )
}

export default Employeeinfo
