import React, { useState } from 'react';
import { useGlobalState } from '../hooks/useGlobalState';

import { useReset } from '../hooks/useReset';
import { ImageGallery } from '../ui/components/gallery/ImageGallery';
import { Header } from '../ui/components/header/Header';
import { HistoryComponent } from '../ui/components/history/HistoryComponent';
import { MenuOptions } from '../ui/components/options/MenuOptions';

export const DashboardScreen = () => {

    const globalState = useGlobalState();

    // dashboard
    const [ params, setParams ] = useState(globalState);
    
    // history
    const [ historyList, setHistoryList ] = useState([]);

    const {
        resetAll
    } = useReset( setParams, setHistoryList );

    // add btn
    const handleAddItem = () => {
        const historyItem = historyList.concat({
           params 
        });
        setHistoryList( historyItem );
    }
    console.log(historyList);


   const [ visibility, setVisibility ] = useState(true);
    
    return (

         <div className="container">
            <div className="row">
                
                <div className="col-sm col-md-8">
                    <Header visibility={ visibility } setVisibility={ setVisibility } />
                    <div className="row">
                        <div className="col-sm col-md-3">
                            <HistoryComponent
                                setParams={ setParams }
                                setHistoryList={ setHistoryList }
                                historyList={ historyList }
                            />
                        </div>
                        <div className="col-sm col-md-9">
                            <ImageGallery params={ params } visibility={ visibility } />
                        </div>
                    </div>
                </div>
                
                <div className="col-sm col-md-4">
                    <div className="options-header alignX">
                        <button className="btn btn-primary" onClick={ ()=> handleAddItem() }>Save</button>
                        <button className="btn btn-outline-primary" onClick={ resetAll }>Reset all values</button>
                    </div>

                <MenuOptions params={ params } setParams={ setParams }  />
                      
                
               
                </div>
            </div>
        </div>

    )
}
