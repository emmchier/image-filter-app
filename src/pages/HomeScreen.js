import React from 'react';

import { useFetchImgs } from '../hooks/useFetchImgs';
import { ImageItem } from '../ui/components/ImageItem';
 
export const HomeScreen = () => {
 
    const { data, loading } = useFetchImgs();
    console.log(data);
 
    return (
         <div className="container">
 
             <div className="row">
 
                { loading && 'Loading...' }
                {
                    data.map( (image, key) => {
                        return (
                            <ImageItem 
                                key={ key }
                                { ...image }
                            />
                        )}
                    )
                }
             </div>
         </div>
    )
}
