import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import Select from '../../Components/Select';
import axios from 'axios';
import './CreateHomeWork.css';

import { URL } from '../../consts'


export default function CreateHomeWork() {

    const [stdClass, setStdClass] = useState('')
    const [workType, setWorkType] = useState('')

		useEffect(() => {

		}, [])

		const getClassStdDetails = () => {
			// axios.get(`${URL}/getClassStandards`)

		}

    const onSelectStandard = (e) => {
        console.log(e.target.value);
        setStdClass(e.target.value);
    }

    const onSelectHomeWorkType = (e) => {
        console.log(e.target.value);
        setWorkType(e.target.value);
    }

    return (

        <div className="container-cls">
					<h5>Create Home work</h5>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <div className="select-cls">

                            <Select
                                options={["7", "8", "9", "10"]}
                                title="Select Class"
                                onSelectChange={(e) => onSelectStandard(e)}
                            />
                        </div>
                        <div className="select-cls">

                            <Select
                                options={["upload", "text"]}
                                title="Select Type"
                                onSelectChange={(e) => onSelectHomeWorkType(e)}
                            />
                        </div>

                        {workType && workType.length > 0 ? (
                            <div className="mr-bo-20">
                                <textarea />
                            </div>
                        ) : ""}


                        <Button>Add Home Work</Button>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
