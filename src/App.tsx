

import './App.css'
import { GENDER } from './constants/gender'
import ButtonComp from './props/ButtonComp'
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
    </>
  )
}

export default App
