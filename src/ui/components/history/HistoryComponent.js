import React, { useState } from 'react';

import { useReset } from '../../../hooks/useReset';

export const HistoryComponent = (props) => {

    const {
        setParams, 
        setHistoryList,
        historyList
    } = props;

    const [ visibility, setVisibility ] = useState(false);

    const { resetHistory } = useReset( setParams, setHistoryList );

    const handleChangeParams = ( key ) => {
        const thisParams = historyList[key].params;
        setParams( thisParams );
    }

    return (
        <>
            <button 
                className={ historyList.length > 0 ? "btn btn-primary" : "btn btn-primary disabled"} 
                onClick={ resetHistory }>
                    CLEAR
            </button>

            <ul>
                {
                    historyList.map( (item, key) => {
                        return (
                            <li 
                                key={key}
                                {...item}>
                                    <button 
                                        className="btn btn-primary alignX" 
                                        onClick={ ()=> handleChangeParams( key ) }>
                                            {key} ITEM 
                                            
                                    </button>
                            </li>
                        )
                        
                    })
                }
            </ul>
        </>
    )
}
