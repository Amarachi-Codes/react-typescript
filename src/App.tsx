

import './App.css'
import { GENDER } from './constants/gender'
import ButtonComp from './props/ButtonComp'
import Employee from './props/Employee'
import Employeeinfo from './props/Employeeinfo'
import Mycounter from './props/Mycounter'
import Myheading from './props/Myheading'
import Student from './props/Student'





function App() {
 const handleClick =()=>{
  alert("Sucesssully Signed Up")
 }
 const handleLogin =()=>{
  alert("Sucesssully Logged In")
 }
 const handleReadmore =()=>{
  alert("Clicked on Read More")
 }
  return (
    <>
      <ButtonComp label='Sign up' onClick={handleClick}/>
      <ButtonComp label='Log In' onClick={handleLogin} color="secondary"/>
      <ButtonComp label='Read More' onClick={handleReadmore} color='readmore' disabled/>
       <Student id={1} firstname='Stanley' lastname='Igwilo' gender={GENDER.Male}/> 
       <Student id={2} firstname='Ethel-Doris' lastname='Igwilo' gender={GENDER.Female}/>
       <Student id={3} firstname='Onyeka' lastname='Madueke' gender={GENDER.Male}/>
       <Student id={4} firstname='Stanley Kamsi' lastname='Igwilo' gender={GENDER.Male}/>
       <Myheading/>
       <Employee id={1} fullname='Madueke Ethel-Doris' username='EthelD' email='etheldorisamarachi@gmail.com'/>
       <Employee id={2} fullname='Madueke Goodness' username='Goody23' email='gudijulieth@gmail.com'/>
       <Mycounter/>
       <Employeeinfo/>
    </>
  )
}

export default App
