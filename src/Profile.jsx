import React from 'react'
import { useContext } from 'react'
import { DataContext } from './context/DataContext'


function Profile() {

  const context = useContext(DataContext)
  // console.log(context);

  const {name , age , Profession} = context

  return (
    <div>
        <h2>
            Profile
            </h2>
            <h3> Name: {name} </h3>
            <h3> Age:  {age}</h3>
            <h3> Profession: {Profession}  </h3>




    </div>
  )
}

export default Profile