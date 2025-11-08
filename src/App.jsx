
import {  useState } from 'react'
import { Outlet } from 'react-router-dom';

function App() {
  const [user , setUser] = useState();

  return (
    <>
     <Outlet context={{setUser,user}}/>
    </>
  )
}

export default App
