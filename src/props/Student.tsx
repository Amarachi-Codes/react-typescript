import { GENDER } from "../constants/gender";

interface StudentDetails{
    id: number;
    firstname: string;
    lastname: string;
    gender: GENDER
}
const Student = ({id, firstname,lastname, gender}:StudentDetails) => {
  return (
    <div>
      <p>
        Id:{id}<br/>
        Firstname: {firstname} {lastname}<br/>
      Gender: {gender}</p>
    </div>
  )
}

export default Student
