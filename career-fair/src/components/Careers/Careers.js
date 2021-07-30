import {useState} from 'react'

function Careers (){

    const getCareerInfo = async ()=> {

        const [careers, setCareers] = useState([])

        const API_ENDPOINT = 'http://localhost:8000/careers/?format=json'
        try{
            const response = await fetch(API_ENDPOINT)
            const data = await response.json()

        } catch (err){
            console.error(err)
        }
    }
}

export default Careers