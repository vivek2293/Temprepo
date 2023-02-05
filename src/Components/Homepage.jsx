import React from 'react'

function Homepage() {
  function handleChange(){
    window.location.href = "/login"
  }
  return (
    <>
      <button type="button" class="btn btn-success m-4" onClick={handleChange}>Login</button>
    </>
  )
}

export default Homepage