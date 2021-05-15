import React, { useState } from 'react';
import { useGlobalState } from '../hooks/useGlobalState';

import { useReset } from '../hooks/useReset';
import { ImageGallery } from '../ui/components/gallery/ImageGallery';
import { MenuOptions } from '../ui/components/options/MenuOptions';

export const DashboardScreen = () => {

    const globalState = useGlobalState();

    // dashboard
    const [ params, setParams ] = useState(globalState);
    
    // history
    const [ historyList, setHistoryList ] = useState([]);

    const {
        resetAll,
        resetHistory
    } = useReset( setParams, setHistoryList );
    
    // add btn
    const handleAddItem = () => {
        const historyItem = historyList.concat({
           params 
        });
        setHistoryList( historyItem );
    }
    console.log(historyList);

     
    const handleChangeParams = ( key ) => {
       const thisParams = historyList[key].params;
       setParams( thisParams );
   }
    
    return (

       
         <div className="container">
            <div className="row">
                
                <div className="col-sm col-md-2">
                    <button 
                        className="btn btn-primary" 
                        onClick={ ()=> resetHistory() }>
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
                </div>
                <div className="col-sm col-md-6">

                   <ImageGallery params={ params } />

                </div>
                <div className="col-sm col-md-4">
                    <div className="options-header alignX">
                        <button className="btn btn-primary" onClick={ ()=> handleAddItem() }>Save</button>
                        <button className="btn btn-outline-primary" onClick={ ()=> resetAll() }>Reset all values</button>
                    </div>

                <MenuOptions params={ params } setParams={ setParams }  />
                      
                
               
                </div>
            </div>
        </div>

    )
}
