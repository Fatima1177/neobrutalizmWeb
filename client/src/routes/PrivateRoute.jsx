import React from 'react'
import { Navigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

const PrivateRoute = ({children}) => {

    const [tokenIsReal, setTokenIsReal] = useState(null)

    const checkToken = async () =>{
        const response = await fetch('http://localhost:3000/admins/verifyMyToken',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
        })

        if (response.status === 200) {
            return setTokenIsReal(true)
        }
        else{
            return setTokenIsReal(false)
        }
    }

    useEffect(() =>{
        checkToken()
    },[])

    if(tokenIsReal === null){
        return null
    } else if(!tokenIsReal){
        return <Navigate to='/loginPage'/>
    } else{
        return children
    }


}

export default PrivateRoute