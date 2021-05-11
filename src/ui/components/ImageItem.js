import React from 'react';
 
export const ImageItem = (props) => {
 
    const { url, name } = props;
 
    return (
        <div className="col-sm col-md-3">
            <div className="card">
                <img
                    src={ url }
                    className="card-img-top"
                    alt={ 'show an item of a gallery' }
                />
                <div className="card-body">
                    <p className="card-text">{ name }</p>
                </div>
            </div>
        </div>
    )
}
