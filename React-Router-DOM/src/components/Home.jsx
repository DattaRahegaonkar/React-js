import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const handleChange = () => {
    navigate('/about');
  }

  return (
    <div>
      This is Home
      <button onClick={handleChange}>Go to About Page</button>
    </div>
  )
}

export default Home
