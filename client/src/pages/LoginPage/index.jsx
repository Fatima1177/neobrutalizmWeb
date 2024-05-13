import React from 'react'
import './style.scss'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, formState:{errors}} = useForm()
  
  const loginData = async(data) =>{
    try{
      const response = await fetch('http://localhost:3000/admins/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }

      )
      const json = await response.json()

      if(response.status === 200){
        alert('Welcome')
        localStorage.setItem('token',json.token)
        navigate('/adminpage')
      }
      else{
        alert(json.mes)
      }
    }
    catch(err){
      alert('err')
    }
    
  }

  return (
    <form onSubmit={handleSubmit(loginData)} className='login-box'>
        <h1>Login Form</h1>
        <div className="inpt-box">
          <input id='username'
          {...register('username',{required: true}  )}
          type="text" 
          placeholder='Enter username' />
          {errors.username && errors.username.type === "required" && (
            <span>Enter your username</span>
          ) }
        </div>

        <div className="inpt-box">
          <input 
          {...register('password',{required: true})}
          type="password" 
          placeholder='Enter password' />
          {errors.password && errors.password.type === "required" && (
            <span>Enter your password</span>
          ) }
        </div>

        <button type='submit'>Submit</button>

    </form>
  )
}


export default LoginPage