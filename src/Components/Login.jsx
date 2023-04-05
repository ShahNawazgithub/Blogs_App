import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
var navigate = useNavigate()
  const [email, setemail] = useState('')
  const [Password, setPassword] = useState('')
  const [data, setdata] = useState([])

  const postData = (e) => {
    e.preventDefault()

    var user = data.find((item) => item.email === email && item.Password === Password)
    if(user){

     localStorage.setItem('login', true)
     localStorage.setItem('Name', user.Name)
     localStorage.setItem('email', user.email)
     localStorage.setItem('Password', user.Password)
     localStorage.setItem('Phone', user.Phone)
     navigate('/admin-create-blog')
    //  console.log(localStorage.getItem('Name'));
    }
    else{
      alert('invailid Email or password!!')
    }
  }

  async function ApiData() {
    var response = await fetch('http://localhost:5000/users')
    var data = await response.json()
    setdata(data)
  }
  useEffect(() => {
    ApiData()
  }, [])

  return (
    <>
      <div className="hero-wrap hero-bread">
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <div className="container-fluid w-100 ">
                <div className='w-75 m-4'>
                  <h5 className='bg-danger text-center text-light w-100 mt-3 p-2' style={{ borderRadius: 10 }}>Login Section</h5>
                  <form onSubmit={postData}>
                    <div className="my-4">
                      <input type="email" name="email" id='email' placeholder='Enter email' required onChange={(e) => setemail(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>
                    <div className="my-4">
                      <input type="password" name="password" id='password' placeholder='Enter Password' required onChange={(e) => setPassword(e.target.value)} className='form-control' style={{ height: 50 }} />
                    </div>
                    <div className="my-4">
                      <button type='submit' className='btn btn-danger text-center text-light w-100 mt-3 btn-lg'>Login</button>
                      <div className='mt-4' >
                        <button className=' text-center text-light m-3 btn btn-danger' ><Link to="/register">Registration</Link></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
