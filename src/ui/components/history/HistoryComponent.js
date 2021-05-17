import React, { useState } from 'react';

import { useReset } from '../../../hooks/useReset';
import { CustomBtn } from '../customs/CustomBtn';

export const HistoryComponent = (props) => {

    const {
        setParams, 
        setHistoryList,
        historyList
    } = props;

    const { resetHistory } = useReset( setParams, setHistoryList );

    const handleChangeParams = ( key ) => {
        const thisParams = historyList[key].params;
        setParams( thisParams );
    }

    return (
        <>
            <div className="history-header alignX pushAside">
                <h2>History</h2>

                <CustomBtn
                    classes={ 
                        historyList.length > 0 
                        ? "btn-reset-history no-bg" 
                        : "btn-reset-history no-bg disabled"} 
                    onClick={ resetHistory }
                    btnTitle={ 'Reset' }
                />
            </div>
            
            {
                historyList.length > 0
                ?
                <ul>
                    {
                        historyList.map( (item, key) => {
                            return (
                                <li 
                                    key={key}
                                    {...item}
                                    className="animate__animated animate__fadeIn">
                                        <CustomBtn
                                            classes={ 'alignX' } 
                                            onClick={ ()=> handleChangeParams( key ) }
                                            btnTitle={ `Change Group ${key + 1}` }
                                        />
                                </li>
                            )
                            
                        })
                    }
                </ul>
                :
                <div className="empty-history animate__animated animate__fadeIn">
                    <p>Your history of saved changes will appear here</p>
                </div>
            }
            
        </>
    )
}
