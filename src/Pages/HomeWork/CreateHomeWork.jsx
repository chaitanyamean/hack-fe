import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import Select from '../../Components/Select';
import axios from 'axios';
import './CreateHomeWork.css';

import { URL } from '../../consts'


export default function CreateHomeWork() {

	const [stdClass, setStdClass] = useState('')
	const [workType, setWorkType] = useState('')
	const [txtArea, setTxtArea] = useState('')
	const [stdList, setStdList] = useState([]);
	const [token, setToken] = useState(localStorage.getItem('token'))

	const [image_file, setimage_file] = useState('')


	useEffect(() => {
		const getClassStdDetails = () => {
			axios.get(`${URL}/getClassStandards`, {
				headers: {
					"Authorization": `Bearer ${token}`
				}
			}).then(res => {
				console.log(res)
				if (res && res.data.length > 0) {
					setStdList(res.data)
				}
			}).catch((err) => {
				console.log(err)
			})
		}
		getClassStdDetails()
	}, [])


	const onSelectStandard = (e) => {
		console.log(e.target.value);
		setStdClass(e.target.value);
	}

	const onSelectHomeWorkType = (e) => {
		console.log(e.target.value);
		setWorkType(e.target.value);
	}

	const handleAdd = (e) => {
		e.preventDefault();

		let data = {
			classStd: stdClass,
			content: txtArea,
			type: workType,
			image_file,
			assignedDate: new Date(),
		}

		axios.post(`${URL}/createHomeWork`, data, {
			headers: {
				'Authorization': `Bearer ${token}`,
				"Content-type": "multipart/form-data",
			}
		})
			.then(res => {
				console.log(`Success` + res);
				
			})
			.catch(err => {
				console.log(err);
			})

	}

	const onTextChange = (e) => {
		setTxtArea(e.target.value)
	}

	const handleImagePreview = (e) => {
		let image_as_files = e.target.files[0];
		setimage_file(image_as_files);
	}

	return (

		<div className="container-cls">
			<h5>Create Home work</h5>
			<Card>
				<Card.Body>
						<div className="select-cls">
							<Select
								options={stdList}
								data={["classStd", "classStdId"]}
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

						{workType && workType === 'text' ? (
							<div className="mr-bo-20">
								<textarea onChange={(e) => onTextChange(e)} />
							</div>
						) : ""}

						{workType && workType === 'upload' ? (
							<div className="mr-bo-20">
								<input type="file" name="samplefile" onChange={(e) => handleImagePreview(e)} />
							</div>
						) : ""}

						<Button onClick={(e) => handleAdd(e)}>Add Home Work</Button>
				</Card.Body>
			</Card>
		</div>
	)
}
