import React, { useState, useEffect } from 'react'
import Select from '../../Components/Select'
import axios from 'axios';

import { URL } from '../../consts'
import HomeWorkCard from '../../Components/HomeWorkCard';

export default function TeacherViewWork() {
    const [stdList, setStdList] = useState([]);
    const [workCard, setWorkCard] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'))


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
        getClassStdDetails();
    }, [])

    const getStudentHomeWorkByClassId = (classId) => {
        const data = {
            "classId": classId
        }
        console.log(data)
        axios.post(`${URL}/getHomeWork`, data, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res)
            if (res && res.data.length > 0) {
                setWorkCard(res.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }



    const onSelectStandard = (e) => {
        console.log(e.target.value);
        setWorkCard([])
        getStudentHomeWorkByClassId(e.target.value);


    }



    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <Select
                    options={stdList}
                    data={["classStd", "classStdId"]}
                    title="Select Class"
                    onSelectChange={(e) => onSelectStandard(e)}
                />
            </div>
            <div style={{ padding: '10px' }}>
                {workCard && workCard.map((item) => {
                    return (
                        <HomeWorkCard
                            data={item}

                        />
                    )
                })}
            </div>
        </div>
    )
}
