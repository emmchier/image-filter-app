import React from 'react';

import { useGetList } from '../../../../hooks/useGetList';

import { MenuOptionHeader } from '../MenuOptionHeader';
import { ShapeIcon } from '../ShapeIcon';

export const Shapes = ({ params, setParams }) => {

    const { shapeList } = useGetList( params, setParams );

    return (
        <div id="options__shapes">
                <div className="shapes-content">
                 
                    <button 
                        className="btn btn-outline-primary" 
                        onClick={ ()=> { setParams({ ...params, mask: "" }) } }>
                            Reset
                    </button>
               
                    {
                        shapeList.map( (shape, key) => {
                            return(
                                <ShapeIcon
                                    key={key}
                                    shapeIcon={ shape.shapeIcon }
                                    shapeName={ shape.shapeName }
                                    onClick={ shape.onClick}
                                />
                            )
                        })
                    }

                </div>
            </div>
    )
}
