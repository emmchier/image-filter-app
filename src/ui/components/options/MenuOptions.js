import React from 'react';

import { MenuSectionComponent } from './sections/MenuSectionComponent';
import { useGetList } from '../../../hooks/useGetList';

export const MenuOptions = ({ params, setParams }) => {

    const { sectionList } = useGetList( params, setParams );

    return (
        <div className="dashboard__menu-options">
            <div className="menu-content accordion" id="accordionExample">
                {
                    sectionList.map( ( section, key ) => {
                        return(
                            <MenuSectionComponent
                                key={ key }
                                params={ params }
                                setParams={ setParams }
                                type={ section.type }
                                collapseId={ section.collapseId }
                                showClass={ section.showClass }
                                ariaExpanded={ section.ariaExpanded }
                                headerName={ section.headerName }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}