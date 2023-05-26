// import React from "react";
// function Profile()
// {
//     return
//     <>
//    <h1>Hello my name is sumesh</h1> 
//     </>
// }
// export default Profile;
import React from 'react'

const Profile = (props) => {
  return (
    <div> <h1>Hello my name is sumesh</h1> 
    <h2>{props.text}</h2>
    </div>
  )
}

export default Profile