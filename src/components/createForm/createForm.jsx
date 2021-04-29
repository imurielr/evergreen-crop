import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { postCrop } from '../../services/cropService';
import './createForm.scss';

function CreateForm({availablePlots, ...otherProps}) {
    const [validated, setValidated] = useState(false);

    const [plot, setPlot] = useState();
    const [type, setType] = useState();
    const [variation, setVariation] = useState();
    const [numSeeds, setNumSeeds] = useState();
    const [supervisor, setSupervisor] = useState();

    const {history} = useHistory()
    
    const handlePlotChange = (event) => {
        setPlot(event.target.value);
    }

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    const handleVariationChange = (event) => {
        setVariation(event.target.value);
    }

    const handleNumSeedsChange = (event) => {
        setNumSeeds(event.target.value);
    }

    const handleSupervisorChange = (event) => {
        setSupervisor(event.target.value);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        postCrop({
            plot_id: parseInt(plot),
            type: type,
            variation: variation,
            num_seeds: parseInt(numSeeds),
            supervisor: supervisor
        }).then(() => {
            document.getElementById("form").reset();
            window.open("/", "_self")
        });
    }

    console.log(type)

    return (
        <Form id="form" className="createForm" noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="createCropForm.plot">
                <Form.Label>Plot</Form.Label>
                <Form.Control as="select" onChange={handlePlotChange} required>
                    <option value="" selected disabled hidden>Choose one...</option>
                    {availablePlots.map(plot => {
                        return plot.available ?
                            <option key={plot.state} value={plot.id}>{plot.state}</option>
                            : null
                    
                    })}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="createCropForm.type">
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" placeholder="eg: Fruit" onChange={handleTypeChange} required />
                <Form.Control.Feedback type="invalid">
                    Please choose a type.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="createCropForm.variation">
                <Form.Label>Variation</Form.Label>
                <Form.Control type="text" placeholder="eg: Carrot" onChange={handleVariationChange} required />
                <Form.Control.Feedback type="invalid">
                    Please choose a variation.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="createCropForm.numSeeds">
                <Form.Label>Number of Seeds</Form.Label>
                <Form.Control type="number" placeholder="eg: 200" onChange={handleNumSeedsChange} required />
                <Form.Control.Feedback type="invalid">
                    Please write the number of seeds.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="createCropForm.supervisor">
                <Form.Label>Supervisor</Form.Label>
                <Form.Control type="text" placeholder="eg: John Doe" onChange={handleSupervisorChange} required />
                <Form.Control.Feedback type="invalid">
                    Please write the name of the supervisor.
                </Form.Control.Feedback>
            </Form.Group>
            <div className="buttons">
                <Link to="/"><Button className="formButton goToListButton" variant="info">Go to list of crops</Button></Link>
                <Button className="formButton submitButton" type="submit">Create Crop</Button>
            </div>
        </Form>
    )
}

export default CreateForm;