import React from 'react'

const PhotoName = () => {
  return (
    <div className="photo-and-name">
    <img src="./src/assets/img/profile.jpg" className="photo" alt="Profile Picture" />
    <div className="contact-info-box">
      <h1 className="name">FALENTINO MARKY</h1>
      <br />
      <h3 className="job-title">DESIGNER</h3>
      <p className="contact-details">Phone: 0895-3333-12085 &nbsp; - &nbsp; Email: tombengfalentino@gmail.com</p>
    </div>
  </div>
  )
}

export default PhotoName