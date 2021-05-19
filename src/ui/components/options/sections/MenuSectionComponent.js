import React from 'react';

import { Adjustments } from './Adjustments';
import { Borders } from './Borders';
import { Effects } from './Effects';
import { Shapes } from './Shapes';

export const MenuSectionComponent = (props) => {

    const {
        params,
        setParams,
        type,
        collapseId,
        showClass,
        ariaExpanded,
        headerName
    } = props;

    const setComponent = (type) => {
        switch (type) {
            case 'adjustment':
                return <Adjustments params={ params } setParams={ setParams } />
            case 'effects':
                return <Effects params={ params } setParams={ setParams } />
            case 'shapes':
                return <Shapes params={ params } setParams={ setParams } />
            default:
                return <Borders params={ params } setParams={ setParams } />
        }
    }

    return (
        <div className="section-menu card">
            <div 
                className="card-header" 
                id={ type }
                data-toggle="collapse" 
                data-target={ `#${ collapseId }` } 
                aria-expanded={ ariaExpanded } 
                aria-controls={ collapseId }>
                <h2 className="mb-0 alignX pushAside">{ headerName }</h2>
            </div>
            <div 
                id={ collapseId } 
                className={ `collapse ${ showClass }` } 
                aria-labelledby={ type } 
                data-parent="#accordionExample">
                <div className="card-body">         
                    { setComponent( type ) }
                </div>
            </div>
        </div>
    )
}
