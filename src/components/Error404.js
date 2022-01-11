import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Error404 = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    },[])

    return (
        <div className='error'>
            <i className='fas fa-exclamation-triangle'></i>
            <h1>404 ERROR</h1>
            <h3>PAGE NOT FOUND</h3>
        </div>
    )
}

