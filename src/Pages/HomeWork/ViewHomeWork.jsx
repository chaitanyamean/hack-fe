import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { URL } from '../../consts'
import HomeWorkCard from '../../Components/HomeWorkCard';

export default function ViewHomeWork() {
	const [token, setToken] = useState(localStorage.getItem('token'));
    const [workCard, setWorkCard] = useState([]);

    useEffect(() => {
        const getStudentHomeWorkByClassId = () => {
            const data = {
                "classId": localStorage.getItem('classId')
            }
            
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
        getStudentHomeWorkByClassId()
    }, [])

    return (
        <div style={{padding: '10px'}}>
            {workCard && workCard.map((item) => {
                return (
                    <HomeWorkCard 
                    data={item}/>
                )
            })}
        </div>
    )
}
