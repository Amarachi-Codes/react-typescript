

import './App.css'
import ButtonComp from './props/ButtonComp'

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
        
    </>
  )
}

export default App
