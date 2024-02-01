import React from 'react'

const Card = ({ image, text, children, h, w }) => {
  return (
    <div>
      <img src={image} alt='' style={{ height: h, width: w }} />

      <p>{text}</p>
      <div>{children}</div>
    </div>
  )
}

export default Card
