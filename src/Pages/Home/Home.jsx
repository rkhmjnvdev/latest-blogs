import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import  '../Home/Home.css'


const Home = () => {

    const [data, setData] = useState([])
    useEffect(() =>{
        axios.get('https://67433913b7464b1c2a640b61.mockapi.io/shopping-uzum/shopping')
        .then(res => { setData(res.data);
        })
    }, [])
  return (
    <div><h3>LATEST BLOGS</h3>
    <NavLink className="admin__link" to="/admin-access">Admin</NavLink>
       <div className="container">
  <ul>
    {data.map((item, index) => {
      return (
        <li key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.date}</p>
        </li>
      );
    })}
  </ul>
</div>
    </div>
  )
}

export default Home