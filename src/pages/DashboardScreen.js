import React from 'react';

import Imgix, { Background } from 'react-imgix';

export const DashboardScreen = () => {

    const images = [
        "forest1",
        "forest2",
        "forest3",
        "mountain1",
        "mountain2",
        "mountain3",
        "river1",
        "river2",
        "river3"
      ];
      
      const buildURL = imagePath =>
        `https://assets.imgix.net/tutorials/${imagePath}.webp`;
      
    return (
        <>
        <Background
            src="https://assets.imgix.net/tutorials/forest4.webp"
            className="hero-image"
            //imgixParams={{ w: 1920, h: 500 }}

        >
            <h2>Responsive Image Gallery with React and imgix</h2>
        </Background>
    
         <div className="container">

           

            {images.map(image => (
            <Imgix
                sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={buildURL(image)}
                key={image}
                imgixParams={{
                fit: "crop",
                fm: "jpg"
                }}
                width="600"
                height="600"
            />
            ))}

            {/*<div className="row">
 
                {   
                    loading
                    ? 'Loading...'
                    : data.map( (image, key) => {
                        return (
                            <ImageItem 
                                key={ key }
                                { ...image }
                            />
                        )}
                    )
                } 
            </div>*/}
        </div>
    </>
            
  
    )
}
