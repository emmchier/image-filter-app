import React from 'react';

import { Adjustments } from './sections/Adjustments';
import { Effects } from './sections/Effects';
import { Shapes } from './sections/Shapes';
import { Borders } from './sections/Borders';

export const MenuOptions = ({ params, setParams }) => {

    return (
        <div className="dashboard__menu-options">
            <div class="accordion" id="accordionExample">

                {/* Adjustments */}
                <div class="card">
                    <div class="card-header" id="adjustments">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        Adjustments
                        </button>
                    </h2>
                    </div>
                    <div id="collapse1" class="collapse show" aria-labelledby="adjustments" data-parent="#accordionExample">
                    <div class="card-body">         
                        <Adjustments params={ params } setParams={ setParams } />
                    </div>
                    </div>
                </div>

                {/* Effects */}
                <div class="card">
                    <div class="card-header" id="effects">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        Effects
                        </button>
                    </h2>
                    </div>
                    <div id="collapse2" class="collapse" aria-labelledby="effects" data-parent="#accordionExample">
                    <div class="card-body">         
                        <Effects params={ params } setParams={ setParams } />
                    </div>
                    </div>
                </div>

                {/* Shapes */}
                <div class="card">
                    <div class="card-header" id="shapes">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Shapes
                        </button>
                    </h2>
                    </div>
                    <div id="collapse3" class="collapse" aria-labelledby="shapes" data-parent="#accordionExample">
                    <div class="card-body">         
                        <Shapes params={ params } setParams={ setParams } />
                    </div>
                    </div>
                </div>

                {/* Borders */}
                <div class="card">
                    <div class="card-header" id="borders">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Borders
                        </button>
                    </h2>
                    </div>
                    <div id="collapse4" class="collapse" aria-labelledby="borders" data-parent="#accordionExample">
                    <div class="card-body">         
                        <Borders params={ params } setParams={ setParams } />
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}