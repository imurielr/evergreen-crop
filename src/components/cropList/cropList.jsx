import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCrops } from '../../services/cropService';
import './cropList.scss';

function CropList({props}) {
    const [crops, setCrops] = useState([]);

    useEffect(() => {
        getCrops().then((crops) => {
            setCrops(crops.data);
        })
    }, [])

    return (
        <div className="list">
            <div className="tableHeader">
                <h1>Crops List</h1>
                <Link to="/create" className="goToCreateButton"><Button variant="info">Create Crop</Button></Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Variation</th>
                        <th>numSeeds</th>
                        <th>Supervisor</th>
                    </tr>
                </thead>
                <tbody>
                    {crops.map((crop, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{crop.type}</td>
                                <td>{crop.variation}</td>
                                <td>{crop.num_seeds}</td>
                                <td>{crop.supervisor}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default CropList;