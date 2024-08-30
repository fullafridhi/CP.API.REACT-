import React from 'react'

const UserList = ({user}) => {
  return (
    <div className='user-list'>
      {/* import user deatils us props */}
      <ul>
        <li>
            <h1> {user.name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
           <p><strong> City:</strong> {user.address.city}
           <p><strong>Street:</strong>{user.address.street} </p> </p>
            </li>
            </ul>
      
    </div>
  )
}

export default UserList
