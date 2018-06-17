import React from 'react'

export default (props) => {
    let imageRenderer = props.images.map((image) => {
        console.log(image.img_src)

        return <div key={image.id}>
                    <p>{image.camera.name}: {image.earth_date}</p>
                    <img key={image.id} src={image.img_src} />
                </div>
    })
    return (
        <div>
            <h3>Rover Images</h3>
            {imageRenderer}
        </div>
    )
}
