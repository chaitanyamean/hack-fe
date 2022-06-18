import React from 'react';
import { useNavigate, to } from 'react-router';

import {Container} from 'react-bootstrap';
import Select from '../../Components/Select';
export default function TeacherDashboard() {
	const navigate = useNavigate();

    const onSelectHomeWork = (e) => {
        console.log(e)
        if(e.target.value === 'View Homework') {
            navigate('/view-homework')
        } else {
            navigate('/create-homework')
        }
    }

    return (
        <div>
            Teacher
            <Container>
            {/* <Button variant="outline-success"
            onClick={() => navigate('/teacher/home-wo')}
            >Home Work</Button>{' '} */}

            <Select 
            options={['Create Homework', 'View Homework']}
            title="Select Any One"
            onSelectChange={(e)=>onSelectHomeWork(e)}/>
            </Container>
        </div>
    )
}
