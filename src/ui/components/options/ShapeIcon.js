import React from 'react';

import CornersIcon from './../../../assets/corners.svg';
import EllipseIcon from './../../../assets/ellipse.svg';
import HexagonIcon from './../../../assets/hexagon.svg';
import HexagonGradIcon from './../../../assets/gradient-hex.svg';
import HexagonInvertIcon from './../../../assets/inverted-hex.svg';

export const ShapeIcon = (props) => {

    const setShapeIcon = (shape) => {
        switch (shape) {
            case 'corners':
                return <img src={ CornersIcon } className="shape-icon" alt={ 'show corners shape' } />
            case 'ellipse':
                return <img src={ EllipseIcon } className="shape-icon"  alt={ 'show ellipse shape' } />
            case 'hexagon':
                return <img src={ HexagonIcon } className="shape-icon"  alt={ 'show hexagon shape' } />
            case 'gradient-hex':
                return <img src={ HexagonGradIcon } className="shape-icon"  alt={ 'show hexagon gradient shape' } />
            default:
                return <img src={ HexagonInvertIcon } className="shape-icon"  alt={ 'show inverted hexagon shape' } />
        }
    }

    const {
        shapeIcon,
        shapeName,
        onClick
    } = props;

    return (
        <div className="shape-item">
            <div 
                className="alignX"
                onClick={ onClick }>
                { setShapeIcon( shapeIcon ) }

                <h6>{ shapeName }</h6>
         
            </div>
        </div>
    )
}
