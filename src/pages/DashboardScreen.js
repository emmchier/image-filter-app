import React, { useState } from 'react';

import { useGlobalState } from '../hooks/useGlobalState';
import { useReset } from '../hooks/useReset';
import { CustomBtn } from '../ui/components/customs/CustomBtn';
import { ImageGallery } from '../ui/components/gallery/ImageGallery';
import { Header } from '../ui/components/header/Header';
import { HistoryComponent } from '../ui/components/history/HistoryComponent';
import { MenuOptions } from '../ui/components/options/MenuOptions';

export const DashboardScreen = () => {

    const globalState = useGlobalState();

    const [ params, setParams ] = useState(globalState);
    
    const [ historyList, setHistoryList ] = useState([]);

    const { resetAll } = useReset( setParams, setHistoryList );

    // add new history item
    const handleAddItem = () => {
        const historyItem = historyList.concat({ params });
        setHistoryList( historyItem );
    }
  
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
                    <div className="options-header alignX pushAside">

                            <CustomBtn 
                                onClick={ ()=> handleAddItem() }
                                btnTitle={ 'Save Changes' }
                                classes={ 'btn-save btnNormal' }
                                to={ '/#' }
                            />

                            <CustomBtn 
                                onClick={ resetAll }
                                btnTitle={ 'Reset all' }
                                classes={ 'btn-reset-all btnText' }
                                isIconVisible={ true }
                                btnIcon={ 'restart_alt' }
                                to={ '/#' }
                            />
        
                    </div>
              
                    <MenuOptions params={ params } setParams={ setParams }  />
 
                </div>
            </div>
        </div>
    )
}
