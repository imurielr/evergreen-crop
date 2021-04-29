import React, { useEffect, useState } from 'react';
import { getPlots } from '../../services/plotsService';
import CreateForm from '../createForm/createForm';
import './createCrop.scss';

function CreateCrop({props}) {
    const [plots, setPlots] = useState([]);

    useEffect(() => {
        getPlots().then((plots) => {
            setPlots(plots.data)
        })
    }, [])

    return (
        <div className="createCropForm">
            <h1>Create Crop</h1>
            <CreateForm availablePlots={plots} />
        </div>
    )
}

export default CreateCrop;

