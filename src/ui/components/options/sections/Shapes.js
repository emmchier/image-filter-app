import React from 'react';

import { useGetList } from '../../../../hooks/useGetList';
import { CustomBtn } from '../../customs/CustomBtn';
import { ShapeIcon } from '../ShapeIcon';

export const Shapes = ({ params, setParams }) => {

    const { shapeList } = useGetList( params, setParams );

    return (
        <div id="options__shapes">
            <div className="shapes-content">

                <CustomBtn 
                    onClick={ ()=> { setParams({ ...params, mask: "" }) } }
                    btnTitle={ 'Reset' }
                    classes={ 'btn-reset-all btn-reset-shapes btnText' }
                />
            
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
