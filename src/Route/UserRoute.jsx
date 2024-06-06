import {Route,Routes} from 'react-router-dom'
import React from 'react'
import HomePage from '../Pages/HomePage'

const UserRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default UserRoute
