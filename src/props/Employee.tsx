interface EmployeeDetials{
    id: number;
    fullname: string;
    username: string;
    email: string;
}

const Employee = ({id,fullname,username,email}:EmployeeDetials) => {
  return (
    <div>
      <p>Id: {id}<br/>
      Fullname: {fullname}<br/>
      Username:{username}<br/>
      Email:{email}</p>
    </div>
  )
}

export default Employee
