import React from 'react';

export const MenuOptionHeader = ( props ) => {

    const {
        headerTitle, 
        tooltipDesc, 
        tooltipOrient
    } = props;

    return (
        <>
            <div className="alignX">
                <h5 className="card-title">{ headerTitle }</h5>
               
                <i 
                    className="material-icons"
                    data-toggle="tooltip" 
                    data-placement={ tooltipOrient } 
                    title={ tooltipDesc }>
                        help
                </i>
            </div>
        </>
    )
}
