import React from 'react'

export default (props) => {
    let imageRenderer = props.images.map((image) => {
        console.log(image.img_src)
    })
  return (
    <div>
        <h3>Rover Images</h3>
        {imageRenderer}
    </div>
  )
}
